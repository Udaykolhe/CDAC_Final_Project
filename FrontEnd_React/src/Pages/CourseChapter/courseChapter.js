import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import AdminNav from '../../Components/Navbar/adminNav'
import ChapterRow from '../../Components/ChapterRow'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './courseChapter.css'

const CourseChapter = () =>{
    
    const navigate = useNavigate()


    const [chapter, setChapter] = useState([])

     const getChapter= () =>{
           const url = `${URL}/chapter/all`

           axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
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
              <AdminNav />
            </div>
      <div >
          <h2 class="title">Chapter</h2>

          <Link to="/add-chapter">
          <a  className="btn btn-success">Add Chapter</a>
           </Link>
      </div>
      <br></br>
      <br></br>
      <div >
      <table className="table table-striped">
<thead>
  <tr>
    <th class="table-primary">Chapter_Id</th>
    <th class="table-primary">Chapter Name</th>
     <th class="table-primary">Videos</th>
     <th class="table-primary">Course</th>
    <th class="table-primary">Action</th>
   
  </tr>
</thead>
<tbody>
{chapter.map((item) => {
    return <ChapterRow chapter={item} />
  })}
</tbody>
</table>
      </div>
    </div> 
    </div>
    )
}

export default CourseChapter