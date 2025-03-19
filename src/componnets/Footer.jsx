// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div style={{height:'300px'}} className='mt-5 container w-100 '>
//       <div className='d-flex justify-content-between'>
      
//         {/* intro */}
//         <div>
//         <h5>
//           <i className="fa-solid fa-music me-3"></i>
//           Echo Play
//         </h5>
//         <p>Designed and built with all the love in the world <br /> by the Echo Play team with the help of our contributors.</p>
//         <p>Code licensed MIT, docs CC BY 3.0.</p>
//         <p>Currently v5.3.3.</p>
        
//         </div>
//         {/* links */}
//         <div className='d-flex flex-column'>
//           <h5>Links</h5>
//           <Link to={'/'} style={{textDecoration:'none' , color:'white'}} >Landing page</Link>
//           <Link to={'/home'} style={{textDecoration:'none' , color:'white'}} >Home page</Link>
//           <Link to={'/history'} style={{textDecoration:'none' , color:'white'}} >Watch History page</Link>
//         </div>
//         {/* guides */}
//         <div className='d-flex flex-column'>
//           <h5>Guides</h5>
//           <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
//           <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
//           <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>

//         </div>
//         {/* contact */}
//         <div className='d-flex flex-column'>
//         <h5>Contacts</h5>
//         <div className='d-flex'>
//           <input type="text" className='form-control me-3' placeholder='Enter Your Email Here...'/>
//           <button className='btn btn-danger'><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//         <div className='d-flex justify-content-between mt-3'>
//           <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
//           <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
//           <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
//           <a href="" style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone" target='_blank'></i></a>
//           <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
//         </div>
//         </div>
//         </div>
//       <p className='text-center mt-3'>Copyright ©Echo Play Inc. All rights reserved.</p>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" mt-5 py-4">
      <Container>
        <Row className="gy-4">
          {/* Intro */}
          <Col lg={4} md={6}>
            <h5>
              <i className="fa-solid fa-music me-2"></i> Echo Play
            </h5>
            <p>
              Designed and built with all the love in the world by the Echo Play team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </Col>

          {/* Links */}
          <Col lg={2} md={3} sm={6}>
            <h5>Links</h5>
            <Link to={'/'} className="text-white text-decoration-none d-block">Landing Page</Link>
            <Link to={'/home'} className="text-white text-decoration-none d-block">Home Page</Link>
            <Link to={'/history'} className="text-white text-decoration-none d-block">Watch History</Link>
          </Col>

          {/* Guides */}
          <Col lg={2} md={3} sm={6}>
            <h5>Guides</h5>
            <a href="https://react.dev/" target='_blank' className="text-white text-decoration-none d-block">React</a>
            <a href="https://react-bootstrap.github.io/" target='_blank' className="text-white text-decoration-none d-block">React Bootstrap</a>
            <a href="https://reactrouter.com/" target='_blank' className="text-white text-decoration-none d-block">React Router</a>
          </Col>

          {/* Contact */}
          <Col lg={4} md={6}>
            <h5>Contacts</h5>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter Your Email Here..." className="me-2" />
              <Button variant="primary"><i className="fa-solid fa-arrow-right"></i></Button>
            </Form>

            {/* Social Links */}
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://x.com/__x" target='_blank' className="text-white fs-5"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/" target='_blank' className="text-white fs-5"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" target='_blank' className="text-white fs-5"><i className="fa-brands fa-facebook"></i></a>
              <a href="tel:+1234567890" className="text-white fs-5"><i className="fa-solid fa-phone"></i></a>
              <a href="https://in.linkedin.com/" target='_blank' className="text-white fs-5"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <p className="text-center mt-4">© Echo Play Inc. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
