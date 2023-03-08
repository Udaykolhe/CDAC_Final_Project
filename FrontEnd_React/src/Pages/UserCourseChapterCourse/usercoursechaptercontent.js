import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../config";
import { toast } from "react-toastify";
import "./usercontent.css";
import UserContenttRow from "../../Components/UserContentRow";
import { useLocation } from "react-router";
import AfterLogNavibar from "../../Components/Navbar/AfterLogNavibar";

const UserCourseChapterContent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [content, setContent] = useState([]);

  const getContent = () => {
    const { id } = state;

    const url = `${URL}/allContents/${id}`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      debugger;
      if (result["status"] == "success") {
        setContent(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getContent();
    console.log("getting called");
  }, []);

  return (
    <div className=" backgroundColour">
      <div className="col">
        <div>
          <AfterLogNavibar />
        </div>
        <div>
          <h2 className="title">Content</h2>

          {/* <Link to="/userchapter">
            <a className="btn btn-success">Add Chapter</a>
          </Link> */}
        </div>
        <br></br>
        <br></br>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
              <th  className="table table-dark table-striped">
                  Content_Id
                </th>
                <th className="table table-dark table-striped">
                  Required_time 
                </th>
                <th className="table table-dark table-striped">Chapter Name</th>
                <th className="table table-dark table-striped">Chapter_id</th>
                <th className="table table-dark table-striped">Link</th>
                {/* <th className="table table-dark table-striped">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {content.map((item) => {
                return <UserContenttRow content={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCourseChapterContent;
