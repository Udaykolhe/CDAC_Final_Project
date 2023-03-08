//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"




const ChapterRow = (props) => {
  const { chapter } = props
  const navigate = useNavigate()

  return (
    <tr>
       <td>{chapter.courseChapterid}</td>
     
       <td>{chapter.chapterTitle}</td>

      <td>{chapter.numOfVideo}</td>
      <td>{chapter.courseid}</td>
      
      <td>
        {/* <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            //navigate('/add-songs-to-artist', { artist: artist })
          }}
          className="btn btn-success btn-sm">
          Add Chapter
        </button> */}
       
        <button   onClick={() => {
            
            navigate('/delete-chapter',{ state: {id: chapter.courseChapterid } })
          }}
        
        className="btn btn-danger float-end">
            delete
          </button>

      </td>
    </tr>
  )
}

export default ChapterRow
