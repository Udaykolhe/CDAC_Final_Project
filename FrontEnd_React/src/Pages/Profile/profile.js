import axios from "axios";
import "./profile.css";
import React, { useState, useEffect } from "react";
import { URL } from "../../config";
import AfterLogNavibar from "../../Components/Navbar/AfterLogNavibar";
import Logo from "../images/logop.png"
import { Link } from "react-router-dom";



const Profile = () => {
  const [User_id, setUser_Id] = useState(sessionStorage.getItem('id'));
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [qualification, setQualification] = useState("");
  const [publishedCourses, setPublishedCourses] = useState("");
  const [contact, setContact] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [data, setData] = useState([]);

  const myuserobj = localStorage.getItem("user");
  const user = JSON.parse(myuserobj);

  const [userobj, setUserobj] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setUserobj(true);
    }
  }, []);




  const profile = () => {
    axios.get(`${URL}/user/find/${User_id}`).then((response) => {
      const result = response.data;
      console.log(result);
      console.log(result.data);
      console.log(result.data.fName);
      console.log(User_id);

      setData(response.data);
      setFName(result.data.fName);
      setLName(result.data.lName);
      setEmail(result.data.email);
      setRole(result.data.role);
      setRegistrationDate(result.data.registrationDate);
      setQualification(result.data.qualification);
      setPublishedCourses(result.data.publishedCourses);
      setContact(result.data.contact);
      setAdharNo(result.data.adharNo);
    });
  };

  useEffect(() => {
    profile();
  }, []);


  return (
    <div >
      <AfterLogNavibar />
      <div className="Profile-Page" id="bottomContainerUser">
        <div style={{ padding: "10px" }} className="row">
          <div className="col"></div>
          <div className="col">
            <div
              className="form-control transferBoxuser"
              style={{ padding: "10px" }}
            >

              <div className="col">
                <center>
                  <img
                    style={{ width: "30%", height: "30%" }}
                    src={Logo}
                    alt="none"
                  ></img>{" "}
                </center>
              </div>
              <h1 className="update">{fName + " " + lName}</h1>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={fName}
                  readOnly={true}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={lName}
                  readOnly={true}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  readOnly={true}
                />
              </div>
              <div className="row">
                {/* <div className="col">
                <label htmlFor="" className="label-control-ud">
                  Role
                </label>
                <input
                  className="form-control"
                  readOnly="true"
                  value={role}
                ></input>
              </div> */}
                <div className="col">
                  <label htmlFor="" className="label-control-ud">
                    RegistrationDate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={registrationDate}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  Qualification
                </label>
                <input
                  className="form-control"
                  value={qualification}
                  readOnly={true}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  PublishedCourses
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={publishedCourses}
                  readOnly={true}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control-ud">
                  Mobile No
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={contact}
                  readOnly={true}
                />
              </div>
              {/* <div className="mb-3">
              <label htmlFor="" className="label-control-ud">
               AdharNo
              </label>
              <input
                type="number"
                className="form-control"
                value={adharNo}
                              />
            </div> */}
              <div className="fw-normal text-muted mb-4">

              </div>
              {/* <div>
              <Link to={`/updateprofile/${User_id}`}>
                                        <button className='btn btn-outline-primary '> Edit </button>
                                    </Link> */}
                <button className="btn btn-dark" href="/updateprofile"><a
                  href="/updateprofile"
                  className="text-primary fw-bold text-decoration-none"
                >
                  <u>Update Profile</u>
                </a></button>
              </div>


            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>

   
  );

};

export default Profile;