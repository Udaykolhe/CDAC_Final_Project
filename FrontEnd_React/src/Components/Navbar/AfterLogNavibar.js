import React, { useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './Navibar.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import axios from "axios";
import { URL } from "../../config";
import Logo from "../../Pages/image/logo.png"

const AfterLogNavibar = () => {
  const [User_id, setUser_Id] = useState(sessionStorage.getItem('id'));
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate()
  
  let loginRegister

  const { firstName, loginStatus } = sessionStorage

  if (firstName != undefined) {
    loginRegister = `Hello, ${firstName}`
  } else {
    loginRegister = "Login"
  }

  const logoutUser = () => {
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("firstName")
    sessionStorage.removeItem("lastName")
    sessionStorage.removeItem("loginStatus")

    // navigate to sign in component
    navigate("/")
  }
  const aData = () => {
    axios.get(`${URL}/user/find/${User_id}`).then((response) => {
      const result = response.data;

      setData(response.data);
      setFName(result.data.fName);
      setLName(result.data.lName);
      setRole(result.data.role);
    });
  }

  useEffect(() => {
    aData();
  }, []);




  return (
    <div >
      <Navbar className='Main-Nav'>
        <Container fluid>
          <Navbar.Brand className='Brand' style={{ color: "black" }} href="/UserCourses"><img style={{width:"100px",height:"50px"}} src= {Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <button className='btn btn-outline-secondary' > <Nav.Link href="/UserCourses" >
                Courses
              </Nav.Link></button>
            </Nav>

            <Navbar.Brand className='Brand' style={{ color: "black" }} href="#">Welcome {fName + " " + lName} </Navbar.Brand>
            <button className='btn btn-sm' > <Nav.Link style={{ color: "black" }} href="/Feedback">Feedback</Nav.Link></button>
            <button className='btn btn-sm' ><Nav.Link href="/profile">Profile</Nav.Link></button>

            <button className='btn btn-outline-danger' onClick={logoutUser}>Logout</button>


            {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AfterLogNavibar