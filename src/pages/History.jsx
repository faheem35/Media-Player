// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'



// const History = () => {

//   const [allVideoHistory, setAllVideoHistory] = useState([])

//   useEffect(() => {
//     getAllHistory()
//   }, [])

//   const getAllHistory = async () => {
//     try {
//       const result = await getAllHistoryAPI()
//       if (result.status >= 200 && result.status < 300) {
//         console.log("Fetched history:", result.data); // Debugging log
//         setAllVideoHistory(result.data)
//       } else {
//         console.log(result);

//       }

//     } catch (err) {
//       console.log(err);

//     }
//   }


// const removeHistory=async (id)=>{
//   try{
//       await deleteHistoryAPI(id)
//       getAllHistory()  //to reload the data from server after delete performs
     
//   }catch(err){
//     console.log(err);
    
//   }
// }

//   return (
//     <div style={{ paddingTop: '100px' }}>
//       <div className='d-flex justify-content-between container'>

//         <h3 >Watch History</h3>
//         <Link to={'/home'}>Back to Home</Link>
//       </div >

//       <table className='container my-5 table'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Caption</th>
//             <th>Link</th>
//             <th>TimeStamp</th>
//             <th>...</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             allVideoHistory?.length > 0 ?


//               allVideoHistory?.map((videoDetails, index) => (
//                 <tr key={videoDetails?.id}>
//                   <td>{index + 1}</td>
//                   <td>{videoDetails?.caption}</td>
//                   <td>{videoDetails?.youtubeLink}</td>
//                   <td>{videoDetails?.timeStamp}</td>
//                   <td> <button className='btn' onClick={()=>removeHistory(videoDetails?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
//                 </tr>
//               )) :
//               <div className='fw-bolder text-danger'>You didnt watch any video yet!!!</div>

//           }
//         </tbody>


//       </table>
//     </div>



//   )
// }

// export default History



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI';

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([]);

  useEffect(() => {
    getAllHistory();
  }, []);

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if (result.status >= 200 && result.status < 300) {
        console.log("Fetched history:", result.data);
        setAllVideoHistory(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeHistory = async (id) => {
    try {
      await deleteHistoryAPI(id);
      getAllHistory(); // Reload data after deletion
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        
          <h4>Watch History</h4>
       
          <Link to={'/home'} className="btn btn-primary">Back to Home</Link>
        
      </div>

      {allVideoHistory.length > 0 ? (
        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Link</th>
                <th>TimeStamp</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allVideoHistory.map((videoDetails, index) => (
                <tr key={videoDetails?.id}>
                  <td>{index + 1}</td>
                  <td>{videoDetails?.caption}</td>
                  <td>
                    <p href={videoDetails?.youtubeLink} target="_blank" rel="noopener noreferrer">
                      {videoDetails?.youtubeLink}
                    </p>
                  </td>
                  <td>{videoDetails?.timeStamp}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeHistory(videoDetails?.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="text-center fw-bold text-danger">You haven't watched any videos yet!</div>
      )}
    </Container>
  );
};

export default History;
