import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Navibar.css'

const ContentNavi = () => {
  return (
    <div >
      <Navbar className='Main-Nav'>
        <Container fluid>
          <Navbar.Brand className='Brand' style={{ color: "black" }} href="/">E-LEARNING</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav.Link style={{ color: "black" }} href="/usercourses">Courses</Nav.Link>
            <Nav.Link style={{ color: "black" }} href="/Profile">Profile</Nav.Link>
            <Nav.Link style={{ color: "black" }} href="/">Logout</Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default ContentNavi