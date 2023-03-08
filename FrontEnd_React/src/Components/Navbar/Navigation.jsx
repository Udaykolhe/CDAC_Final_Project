import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Aboutus from "../../Pages/Aboutus/Aboutus";
import Courses from "../../Pages/courses/courses";
import Home from "../../Pages/Home/home";
import Profile from "../../Pages/Profile/profile";
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";

const Navigation = () => {
    const myuserobj = localStorage.getItem("user");
    const user = JSON.parse(myuserobj);

    const [userobj, setUserobj] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("user");
        if (loggedIn) {
            setUserobj(true);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUserobj(false);
    };
    return (
        <>
            <Navbar className="mynavbar">
                <Container>
                    <Navbar.Brand href="/">

                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/about">
                            About Us
                        </NavLink>
                        <NavLink className="nav-link" to="/course">
                            Courses
                        </NavLink>
                        {userobj ? (
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                    </Nav>
                    <Nav>
                        {!userobj ? (
                            <Nav.Link as={Link} to="/signup">
                                Register
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {!userobj ? (
                            <Nav.Link as={Link} to="/signin">
                                Login
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {userobj ? (
                            <Nav.Link as={Link} to="/" onClick={logout}>
                                Logout
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Aboutus />} />
                    <Route path="/course" element={<Courses />} />
                    <Route
                path="/signup"
                element={<Signup />}
              />
              <Route path="/signin" element={<Signin />} />
              {userobj && (user.role == "ADMIN" | user.role == "STUDENT") ? <Route
                path="/profile"
                element={<Profile />}
              /> : <Route
                path="/api/psd/user/Profile"
                element={<Signin />}
              />}

                </Routes>
            </div>
        </>
    )
}

export default Navigation