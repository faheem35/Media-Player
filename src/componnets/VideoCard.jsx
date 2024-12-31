import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import {  removeVideoAPI, saveHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData, setDeleteVideoResponseFromVideoCard, insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{ 
    //display modal
    setShow(true);
    
    //store history in json
    const{caption,youtubeLink}=displayData
    const sysDateTime= new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp=sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails={caption,youtubeLink,timeStamp}

    //api call to store in history 
    try{
    await saveHistoryAPI(historyDetails)

    }catch(err){
      console.log(err);
      
    }

  }
  

  const deleteVideo=async(id)=>{
    try{
          const result= await removeVideoAPI(id)
          setDeleteVideoResponseFromVideoCard(result)
    }catch(err){
      console.log(err);
      
    }
  }

  const videoCardDragStarted=(e,dragVideoDetails)=>{
    console.log("inside videoCardDragStarted with videoId:"+ dragVideoDetails?.id);

    //share data using event drag strat
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    

  }


 
  return (
   <>
    <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" height={'180px'} src={displayData?.imgUrl} />
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-between'>
          <span className='text-white'>{displayData?.caption}</span>
         

          {!insideCategory &&   <button onClick={()=>deleteVideo(displayData?.id)}  className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Text>
        
      </Card.Body>
    </Card>

    {/* Modal */}
    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {<iframe width="100%" height="360" src={`${displayData.youtubeLink}?autoplay=1`} title="Pushpa 2 The Rule Trailer Malayalam | Allu Arjun | Sukumar | Rashmika Mandanna | Fahadh Faasil | DSP"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard