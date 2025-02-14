import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className="bg-info">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}} >
        <Navbar.Brand style={{color:'white'}} className='fs-5 fw-bolder' >
        <i className="fa-solid fa-music me-3"></i>
          Echo Play
        </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default Header