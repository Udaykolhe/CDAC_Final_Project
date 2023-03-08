// import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import AdminNav from '../../Components/Navbar/adminNav';

import CoursesRow from '../../Components/CoursesRow'

import './admin.css'

const Admin = () => {

  // const navigate = useNavigate()
   

  const [courses, setCourses] = useState([])

  // console.log("it is state")

  const getCourses = () => {
    const url = `${URL}/courses/all`

    axios.get(url).then((response) => {
      const result = response.data
      //console.log("result")
      console.log(result)
      // console.log(typeof(result))
      // if (result['status'] == 'success') {
      if (result != null) {
        setCourses(result.data)
      } else {
        toast.error(result['error'])
      }
    })
  }


  useEffect(() => {
    getCourses()
    console.log('getting called')
  }, [])

  return (
   
 
    <div 
     className="imageBack">
      <div className="col">
        <div>
          <AdminNav />
        </div>
        <div >
          <h2 class="title">Courses</h2>

          <Link to="/add-courses">
            <a className="btn btn-success">Add Courses</a>
          </Link>
          <Link to="/adminprofile">
            <a className="btn btn-success">Profile</a>
          </Link>
        </div>
        <br></br>
        <br></br>
        <div >
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="table-primary">Course_Id</th>
                <th className="table-primary">Course_Name</th>
                <th className="table-primary">Description</th>
                <th className="table-primary">Total Chapter</th>
                <th className="table-primary">Action</th>

              </tr>
            </thead>
            <tbody>
              {courses.map((item) => {
                return <CoursesRow courses={item} />
              })}
            </tbody>
          </table>
        </div>
      </div>
   </div>
  )
}
export default Admin;