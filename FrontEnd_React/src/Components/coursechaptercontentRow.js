//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CourseChapterContentRow = (props) => {
  const { coursechaptercontent } = props;
  const navigate = useNavigate();

  return (
    <tr>
      <td className="table-info">{coursechaptercontent.contentid}</td>

      <td className="table-info">
        {coursechaptercontent.timeRequiredToCompleteTheCourse}
      </td>

      <td className="table-info">{coursechaptercontent.chapterContent}</td>
      <td className="table-info">{coursechaptercontent.courseChapterid}</td>
      {/* <td className="table-info">{coursechaptercontent.contentLink}</td> */}
      <td className="table-info">
        {/* <a href={coursechaptercontent.contentLink}>Link</a>; */}
        <a href={coursechaptercontent.contentLink} target="_blank">
          {" "}
          More Info{" "}
        </a>
      </td>
      <td>
        {/* <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            //navigate('/add-songs-to-artist', { artist: artist })
          }}
          className="btn btn-success btn-sm">
          Add Content 
        </button> */}

        <button className="btn btn-danger "
          onClick={() => {
            navigate("/delete-content", {
              state: { id: coursechaptercontent.contentid },
            });
          }}
         
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default CourseChapterContentRow;
