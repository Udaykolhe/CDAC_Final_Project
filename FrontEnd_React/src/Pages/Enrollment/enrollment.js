import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import Navbar from '../../Components/navbar'
import EnrollmentRow from '../../Components/EnrollmentRow'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './enrollment.css'

const Enrollment = () =>{
    
    const navigate = useNavigate()


    const [enrollment, setEnrollment] = useState([])

     const getEnrollment= () =>{
           const url = `${URL}/enrollment/All`

           axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
              setEnrollment(result['data'])
            } else {
              toast.error(result['error'])
            }
          })
     }
      
     useEffect(() => {
        getEnrollment()
        console.log('getting called')
      }, [])

    return(
   
      <div className="col">
            <div>
              <Navbar />
            </div>
      <div >
          <h2 class="title">Enrollment</h2>

          <Link to="/add-Enrollment">
          <a  className="btn btn-success">Add Enrollment</a>
           </Link>
      </div>
      <br></br>
      <br></br>
      <div >
      <table className="table table-striped">
<thead>
  <tr>
    <th  >enrollmentid</th>
    <th  >courses</th>
     
     <th >user</th>
    <th>Action</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
{enrollment.map((item) => {
    return <EnrollmentRow enrollment={item} />
  })}
</tbody>
</table>
      </div>
    </div> 
  
    )
}

export default Enrollment