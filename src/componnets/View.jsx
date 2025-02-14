import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI,  saveVideoAPI,  updateCategoryAPI } from '../services/allAPI'



const View = ({addResponseFromHome,deleteResponseFromCategory, setDeleteResponseFromView}) => {

const [deleteVideoResponseFromVideoCard, setDeleteVideoResponseFromVideoCard]=useState("")  // its bcz of videoCard is inside view component. so there need state uplifing to make changes in videoCard component.

  const [allVideos,setAllVideos]=useState([])

  useEffect(()=>{
   getAllVideos()
  },[addResponseFromHome,deleteResponseFromCategory, deleteVideoResponseFromVideoCard])

  console.log(allVideos);
  

const getAllVideos=async ()=>{
  try{

    const result=await getAllVideosAPI()
    console.log(result);

    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
      
    }else{
      console.log("API call failed");
      
    }
    
  }catch(err){
    console.log(err);
    
  }     
}

const dragOverView=(e)=>{
  e.preventDefault()
}

const categoryVideoDragOverView=async(e)=>{
  console.log("inside categoryVideoDragOverView");
  
  
  const {video, categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video, categoryDetails);

  const updatedCategoryVideoList= categoryDetails?.allVideos?.filter(item=> 
    item.id != video?.id
  )

  const updateCategory= {...categoryDetails,allVideos:updatedCategoryVideoList}  //confusion
  console.log(updateCategory);
  
  //updating the category by dlt video from category
  const result=await updateCategoryAPI(updateCategory)
  //use state lifing to communicate data from view to category
  setDeleteResponseFromView(result)
  //use api to upload video to uploadVideos 
  await saveVideoAPI(video)
  //call getAllVideos() again
  getAllVideos()
 
  
}

  return (
   <>
   <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)}>
  {
    allVideos?.length>0?
    allVideos.map(video=>(
      <Col key={video?.id} className='mb-2' sm={12} md={6} lg={4}>  {/* sm={12} : 1 card in small screen size.  md={6}: 2 cards in medium (12/2=6) */}
      <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
      </Col>
  
    ))
  
   :
   <div>No videos are uploaded</div>

  }
    
   </Row>

    </>
  )
}

export default View