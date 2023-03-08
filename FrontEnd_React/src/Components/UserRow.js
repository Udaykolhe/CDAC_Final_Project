//import { url } from '../common/constants'
import { useNavigate } from "react-router"

const UserRow = (props) => {
  const { users } = props
  const navigate = useNavigate()

  return (
    <tr>
       <td className="table-success">{users.id}</td>
       <td className="table-secondary">{users.fName+"  "+users.lName}</td>
       <td className="table-success">{users.email}</td>
       <td className="table-info">{users.registrationDate}</td>
       <td className="table-success">{users.qualification}</td>
       <td className="table-secondary">{users.publishedCourses}</td>
       <td className="table-info">{users.contact}</td>
       <td className="table-success">{users.role}</td>

       <td>
       <button
          onClick={() => {  
            navigate('/delete-user', { state: {id: users.id} })
          }}
          className="btn btn-danger">
          Delete User
        </button>
      </td>
    </tr>
  )
}

export default UserRow
