import React, { useState } from 'react'
import Add from '../componnets/Add'
import View from '../componnets/View'
import Category from '../componnets/Category'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'



const Home = () => {
  const [deleteResponseFromView,setDeleteResponseFromView] =useState("")//for deleting fromm category when drag from category to view componnet

  const [deleteResponseFromCategory,setDeleteResponseFromCategory]=useState("")
  const [addResponseFromHome, setAddResponseFromHome]=useState("") //to make realtime reflection of upload of video on view component.

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* top section */}
      <div className='d-flex justify-content-between align-items-center container mb-5'>

        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link  to={'/history'} className="btn btn-primary ms-3 ">Watch History</Link>

      </div>




      {/* mid section */}
      <div className='container-fluid my-5 row'>
        <div className="col-lg-6">
          <h3 className='mb-4'>All videos</h3>
          <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/>
        </div>
        <div className="col-lg-6">
         
          <Category deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>

        </div>

      </div>


    </div>
  )
}

export default Home
