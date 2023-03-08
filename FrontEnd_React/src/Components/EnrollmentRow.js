//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"




const EnrollmentRow = (props) => {
  const { enrollment } = props
  const navigate = useNavigate()

  return (
    <tr>
       <td className="table-success">{enrollment.enrollmentid}</td>
       <td className="table-danger">{enrollment.courseid}</td>
       <td className="table-Secondary">{enrollment.user_id}</td>
      
      <td>
        <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            //navigate('/add-songs-to-artist', { artist: artist })
          }}
          className="btn btn-success btn-sm">
          Add Enrollment
        </button>
       
        <button   onClick={() => {
            
            navigate('/delete-chapter', { enrollment: enrollment })
          }}
        
        className="btn btn-danger float-end">
            delete
          </button>

      </td>
    </tr>
  )
}

export default EnrollmentRow
