import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import './userchapter.css'
import UserChapterRow from '../../Components/UserChapterRow'
import { useLocation } from 'react-router'
import AfterLogNavibar from '../../Components/Navbar/AfterLogNavibar'

const UserCourseChapter = () =>{
    
    const navigate = useNavigate()
    const { state } = useLocation()

    
    const [chapter, setChapter] = useState([])

     const getChapter= () =>{
        const {id}= state

           const url = `${URL}/allChapterss/${id}`

           axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            debugger
            if (result['status'] == 'success') {
              setChapter(result['data'])
            } else {
              toast.error(result['error'])
            }
          })
     }
      
     useEffect(() => {
        getChapter()
        console.log('getting called')
      }, [])

    return(
      <div className=" backgroundColour">  
      <div className="col">
            <div>
            <AfterLogNavibar />
            </div>
      <div >
          <h2 className="title">Chapters</h2>

          {/* <Link to="/userchapter">
          <a  className="btn btn-success">Add Chapter</a>
           </Link> */}
      </div>
      <br></br>
      <br></br>
      <div >
      <table className="table table-striped">
<thead>
  <tr>
    <th className="table table-dark table-striped">Chapter_Id</th>
    <th className="table table-dark table-striped">Chapter_Title</th>
     <th className="table table-dark table-striped">numOfVideo</th>
     <th className="table table-dark table-striped">Courses</th>
    <th className="table table-dark table-striped">Action</th>
    {/* <th className="table table-dark table-striped">Action</th> */}
  </tr>
</thead>
<tbody>
{chapter.map((item) => {
    return <UserChapterRow chapter={item} />
  })}
</tbody>
</table>
      </div>
    </div> 
    </div>
    )
}

export default UserCourseChapter