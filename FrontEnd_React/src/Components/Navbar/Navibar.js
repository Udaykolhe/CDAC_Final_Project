import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Navibar.css'
import Logo from "../../Pages/image/logo.png"

const Navibar = () => {
  return (
    <div >
      <Navbar className='Main-Nav'>
        <Container fluid>
          <Navbar.Brand className='Brand' href="/"><img style={{width:"100px",height:"50px"}} src= {Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}

              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Aboutus">About-Us</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
              <Nav.Link href="/Courses" >
                Courses
              </Nav.Link>
            </Nav>

            <Nav.Link href="/Signin">Signin</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
                    </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar