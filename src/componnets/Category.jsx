import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({setDeleteResponseFromCategory, deleteResponseFromView}) => {
  const [allCategories, setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()

  },[deleteResponseFromView]) 

  const handleSaveCategory=async()=>{
    if(categoryName){
      const categorydetails={categoryName,allVideos:[]}  //to save in server, only allowed to save in array of object manner. so we turns the string to object

      try{
        const result=await saveCategoryAPI(categorydetails)
        alert("Category Added")
        getAllCategories()
        handleClose()

      }catch(err){
        console.log(err);
        
      }

    }else{
      alert("please provide a category name")
    }
  }

  const getAllCategories =async()=>{
    try{
      const result=await getAllCategoryAPI()
      if(result.status>=200 && result.status<300)
        {
        setAllCategories(result.data)
                              
      }

    }catch(err){
      console.log(err);
      
    }

  }

  console.log("categories are:",allCategories);


  const removeCategory=async(id)=>{
    try{
      await deleteCategoryAPI(id)
      getAllCategories()

    }catch(err){
      console.log(err);
      
    }

  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
  }

  const videoCardDropOverCategory=async (e,categoryDetails)=>{
    console.log("inside videoCardDropOverCategory");
    // console.log(categoryDetails);
   const videoDetails= JSON.parse( e.dataTransfer.getData("videoDetails"))
   console.log(videoDetails);
   
    //update category by add video its allVideos
    categoryDetails.allVideos.push(videoDetails)  //it only stores data temporarily
    console.log(categoryDetails);

    //api call to update the category
    await updateCategoryAPI(categoryDetails)
    getAllCategories()
    const result=await removeVideoAPI(videoDetails?.id)
    setDeleteResponseFromCategory(result)
    
    
  }

  const categoryVideoDragStarted=(e,dragVideoDetails,categoryDetails)=>{
    console.log("inside categoryVideoDragStarted");
    let dragData={video:dragVideoDetails, categoryDetails}  //we can only transfer data in string format. so we save multiple data in objet firstly. then convert it in to string using stringify()
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    
  }
  

  return (
  <>
      <div className='d-flex justify-content-between  align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
  
      </div>
{/* display all categories */}
      <div className='conatiner-fluid my-3'>

       {/* single category view */}
       {
        allCategories?.length>0?
        allCategories.map(categoryDetails=>(
      <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">

          <div className="d-flex justify-content-between">
           <h5>{categoryDetails?.categoryName}</h5>
           <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
           </div>
   
          {/* display category videos */}
   
          <div className="row mt-2">

            {
              categoryDetails?.allVideos?.length>0 &&
              categoryDetails?.allVideos?.map(
                video=>(
                  <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)}>
                  {/* video cards */}
                    <VideoCard insideCategory={true} displayData={video}/>
        
                </div>

                )
              )
            }
           
          
          </div>
   
           </div>
        )):
        <div className='fw-bolder text-danger'>No categories are added yet</div>
       }

      </div>
  
  
  {/*  modal */}
  <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingCategoryName" label="Category Name">
        <Form.Control onChange={e=>setCategoryName(e.target.value)}  type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
        
      </Modal>
  </>


  )
}

export default Category