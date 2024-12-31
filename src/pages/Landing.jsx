//rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/landing-img.gif'
import feature1 from '../assets/feature-1.jpg'
import feature2 from '../assets/feature-2.avif'
import feature3 from '../assets/feature-3.jpg'
import { Card } from 'react-bootstrap'
Card

const Landing = () => {
  return (
    <div className='pt-5 container '>
      {/* landing section */}
    <div className="row align-items-center min-vh-100" >
    {/* Landing content */}
    <div className="col-lg-5 ">
      <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}} className='mb-4'>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
      <Link to={'/home'} className='btn btn-info'>Get Started</Link>
    </div>
    <div className="col"></div>
    {/* Landing image */}
    <div className="col-lg-6">
    <img src={landingImage} className='img-fluid ms-5' alt="" />
    </div>
    </div>

      {/* feature section */}
     <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature1}  />
            <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
           Users can upload, view and remove the videos
           </Card.Text>
          
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature2} />
            <Card.Body>
            <Card.Title>Categorise Videos</Card.Title>
            <Card.Text>
           Users can categorise the videos by drag and drop feature.
           </Card.Text>
          
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature3}  />
            <Card.Body>
            <Card.Title>Managing Histories</Card.Title>
            <Card.Text>
           Users can manage the history section effectively.
           </Card.Text>
          
            </Card.Body>
          </Card>
          </div>
        </div>
     </div>


     {/* last section */}

      <div className='my-5 row align-items-center border rounded p-5 '>

       
        <div className="col-lg-5">
        <h3 className='text-warning'>Simple, Fast and Powerful</h3>

        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing Videos:</span> Users can upload, view and remove the videos</p>

        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorise Videos:</span> Users can categorise the videos by drag and drop feature.</p>

        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing Histories:</span> Users can manage the history section effectively.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="360" src="https://www.youtube.com/embed/_VaOX6jRD3Y" title="PEELINGS (Malayalam Lyrical Video) | Pushpa 2 The Rule | Allu Arjun | Rashmika | Sukumar | DSP" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>



        
      </div>

    </div>
  )
}

export default Landing