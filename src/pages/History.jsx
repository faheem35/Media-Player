import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'



const History = () => {

  const [allVideoHistory, setAllVideoHistory] = useState([])

  useEffect(() => {
    getAllHistory()
  }, [])

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI()
      if (result.status >= 200 && result.status < 300) {
        console.log("Fetched history:", result.data); // Debugging log
        setAllVideoHistory(result.data)
      } else {
        console.log(result);

      }

    } catch (err) {
      console.log(err);

    }
  }


const removeHistory=async (id)=>{
  try{
      await deleteHistoryAPI(id)
      getAllHistory()  //to reload the data from server after delete performs
     
  }catch(err){
    console.log(err);
    
  }
}

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className='d-flex justify-content-between container'>

        <h3 >Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div >

      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length > 0 ?


              allVideoHistory?.map((videoDetails, index) => (
                <tr key={videoDetails?.id}>
                  <td>{index + 1}</td>
                  <td>{videoDetails?.caption}</td>
                  <td>{videoDetails?.youtubeLink}</td>
                  <td>{videoDetails?.timeStamp}</td>
                  <td> <button className='btn' onClick={()=>removeHistory(videoDetails?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              )) :
              <div className='fw-bolder text-danger'>You didnt watch any video yet!!!</div>

          }
        </tbody>


      </table>
    </div>



  )
}

export default History