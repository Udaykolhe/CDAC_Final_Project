//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"




const UserContenttRow = (props) => {
  const { content } = props
  const navigate = useNavigate()

  return (
    <tr>
      <td>{content.contentid}</td>

      <td>{content.timeRequiredToCompleteTheCourse}</td>

      <td>{content.chapterContent}</td>
      <td>{content.courseChapterid}</td>
      <td>
      <a href={content.contentLink} target="_blank">
          {" "}
          More Info{" "}
        </a>
      </td>

      
    </tr>
  )
}

export default UserContenttRow
