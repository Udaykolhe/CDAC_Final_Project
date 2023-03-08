import { Navigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import AdminNav from '../../Components/Navbar/adminNav'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import UserRow from "../../Components/UserRow"
import './user.css'

const User = () =>{

     // const navigate = useNavigate()

   const [users, setAlbums] = useState([])

   // console.log("it is state")

     const getUser= () =>{
           const url = `${URL}/user/all`

           axios.get(url).then((response) => {
                const result = response.data
                console.log(result)
          if (result['status'] == 'success') {
         //if (result != null){
          setAlbums(result.data)
        } else {
          toast.error(result['error'])
        }
      })
 }

 useEffect(() => {   
   getUser()
   console.log('getting called')
 }, [])

    return (
   <div className="col">
       <div>
       <AdminNav />
       </div>
       <div>
         <h2 className="title">Users</h2>
         
         {/* <Link to="/add-album">
                 <a  className="btn btn-success">Add Album</a>
         </Link> */}
         </div>
         <br></br>
             <br></br>
             <div >
             <table className="table table-striped">
       <thead>
         <tr>
       
           <th className="table table-dark table-striped">User_id</th>
           <th className="table table-dark table-striped">Full Name</th>
           <th className="table table-dark table-striped">Email</th>
           <th className="table table-dark table-striped">Registration Date</th>
           <th className="table table-dark table-striped">Qualification</th>
           <th className="table table-dark table-striped">Published Courses</th>
           <th className="table table-dark table-striped">Mobile No</th>
            <th className="table table-dark table-striped">Role</th>

         </tr>
       </thead>
       <tbody>
       {users.map((item) => {
           return <UserRow users={item} />
         })}
       </tbody>
     </table>
             </div>

   </div>
    )
}

export default User