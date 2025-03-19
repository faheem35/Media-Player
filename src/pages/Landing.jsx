// //rafce
// import React from 'react'
// import { Link } from 'react-router-dom'
// import landingImage from '../assets/landing-img.gif'
// import feature1 from '../assets/feature-1.jpg'
// import feature2 from '../assets/feature-2.avif'
// import feature3 from '../assets/feature-3.jpg'
// import { Card } from 'react-bootstrap'
// Card

// const Landing = () => {
//   return (
//     <div className='pt-5 container '>
//       {/* landing section */}
//     <div className="row align-items-center min-vh-100" >
//     {/* Landing content */}
//     <div className="col-lg-5 ">
//       <h3 className='mb-3'>Welcome to <span className='text-warning'>Echo Play</span></h3>
//       <p style={{textAlign:'justify'}} className='mb-4'>Echo Play App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
//       <Link to={'/home'} className='btn btn-danger'>Get Started</Link>
//     </div>
//     <div className="col"></div>
//     {/* Landing image */}
//     <div className="col-lg-6">
//     <img src={landingImage} className='img-fluid ms-5' alt="" />
//     </div>
//     </div>

//       {/* feature section */}
//      <div className='my-5'>
//         <h3 className='text-center'>Features</h3>
//         <div className="row mt-5">
//           <div className="col-lg-4">
//           <Card style={{ width: '20rem' }}>
//             <Card.Img height={'250px'} variant="top" src={feature1}  />
//             <Card.Body>
//             <Card.Title>Managing Videos</Card.Title>
//             <Card.Text>
//            Users can upload, view and remove the videos
//            </Card.Text>
          
//             </Card.Body>
//           </Card>
//           </div>
//           <div className="col-lg-4">
//           <Card style={{ width: '20rem' }}>
//             <Card.Img height={'250px'} variant="top" src={feature2} />
//             <Card.Body>
//             <Card.Title>Categorise Videos</Card.Title>
//             <Card.Text>
//            Users can categorise the videos by drag and drop feature.
//            </Card.Text>
          
//             </Card.Body>
//           </Card>
//           </div>
//           <div className="col-lg-4">
//           <Card style={{ width: '20rem' }}>
//             <Card.Img height={'250px'} variant="top" src={feature3}  />
//             <Card.Body>
//             <Card.Title>Managing Histories</Card.Title>
//             <Card.Text>
//            Users can manage the history section effectively.
//            </Card.Text>
          
//             </Card.Body>
//           </Card>
//           </div>
//         </div>
//      </div>


//      {/* last section */}

//       <div className='my-5 row align-items-center border rounded p-5 '>

       
//         <div className="col-lg-5">
//         <h3 className='text-warning'>Simple, Fast and Powerful</h3>

//         <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing Videos:</span> Users can upload, view and remove the videos</p>

//         <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorise Videos:</span> Users can categorise the videos by drag and drop feature.</p>

//         <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing Histories:</span> Users can manage the history section effectively.</p>
//         </div>
//         <div className="col"></div>
//         <div className="col-lg-6">
//         <iframe width="100%" height="360" src="https://www.youtube.com/embed/_VaOX6jRD3Y" title="PEELINGS (Malayalam Lyrical Video) | Pushpa 2 The Rule | Allu Arjun | Rashmika | Sukumar | DSP" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//         </div>



        
//       </div>

//     </div>
//   )
// }

// export default Landing

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import landingImage from '../assets/landing-img3.gif';
import feature1 from '../assets/feature-1.jpg';
import feature2 from '../assets/feature-2.avif';
import feature3 from '../assets/feature-3.jpg';

const Landing = () => {
  return (
    <Container className='pt-5'>
      {/* Landing Section */}
      <Row className='align-items-center min-vh-100'>
        <Col lg={5} className='text-center text-lg-start'>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Echo Play</span></h3>
          <p className='mb-4 text-justify'>
            Echo Play App allows users to add or remove their uploaded videos from YouTube and organize them into different categories using drag and drop. Users can also manage their watch history effectively. What are you waiting for? Start exploring our site!
          </p>
          <Link to='/home'>
            <Button variant='primary'>Get Started</Button>
          </Link>
        </Col>
        <Col lg={1}></Col>
        <Col lg={6} className='text-center'>
          <img src={landingImage} className='img-fluid' alt='Landing' />
        </Col>
      </Row>

      {/* Features Section */}
      <div className='my-5 text-center'>
        <h3>Features</h3>
        <Row className='mt-5 justify-content-center'>
          {[{img: feature1, title: 'Managing Videos', text: 'Users can upload, view, and remove videos.'},
            {img: feature2, title: 'Categorise Videos', text: 'Users can categorize videos using drag and drop.'},
            {img: feature3, title: 'Managing Histories', text: 'Users can manage their watch history effectively.'}].map((feature, index) => (
            <Col key={index} lg={4} md={6} className='d-flex justify-content-center mb-4'>
              <Card style={{ width: '20rem' }}>
                <Card.Img height='250px' variant='top' src={feature.img} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Last Section */}
      <Row className='my-5 align-items-center border rounded p-5'>
        <Col lg={5} className='text-center text-lg-start'>
          <h3 className='text-warning'>Simple, Fast, and Powerful</h3>
          {[{title: 'Managing Videos:', text: 'Users can upload, view, and remove videos.'},
            {title: 'Categorise Videos:', text: 'Users can categorize videos using drag and drop.'},
            {title: 'Managing Histories:', text: 'Users can manage their watch history effectively.'}].map((item, index) => (
            <p key={index} className='text-justify'>
              <span className='fs-5 fw-bolder'>{item.title}</span> {item.text}
            </p>
          ))}
        </Col>
        <Col lg={1}></Col>
        <Col lg={6} className='text-center'>
          <iframe
            width='100%'
            height='360'
            src='https://www.youtube.com/embed/_VaOX6jRD3Y'
            title='YouTube Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
