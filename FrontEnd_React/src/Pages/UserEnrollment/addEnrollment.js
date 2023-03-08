import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Navbar from '../../Components/navbar'
import { toast } from 'react-toastify'
import'./addCourseChapter.css'

const AddChapter = () => {
    const [enrollmentid, setEnrollmentId] = useState('')
    const [user, setUser] = useState('')   
    const [courses, setCourses] = useState('')
  

    const navigate = useNavigate()
  
    const addEnrollmenttoDb = () =>{
          //const artistId = 3         

         if(numOfVideo.length == 0){
             toast.warning('please enter title')
         } else if (chapterTitle.length == 0){
             toast.warning('please enter thubnail')
         }else{
              const body = {
                enrollmentid,
                user,
                numOfVideo,
                courseid,
              }

              const url = `${URL}/chapter`

              axios.post(url, body).then((response) => {

                 // get the server result
                  const result = response.data
                  if (result['status'] == 'success'){
                    toast.success('added new album')
                     navigate('/admin')
                  }else {
                    toast.error(result['error'])
                  }
              })
         }

    }

    return (

    <div className="col">
        <div>
        <Navbar />
        </div>
          <h2 class = "title">Add Chapter</h2>
           
          <div className="mb-3">
        <label htmlFor="" className="label-control">CourseChapterid</label>
        <input
          onChange={(e) => {
            setCourseChapterId(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>




          <div className="mb-3">
        <label htmlFor="" className="label-control">ChapterTitle</label>
        <input
          onChange={(e) => {
            setChapterTitle(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">NumOfVideo</label>
        <input
          onChange={(e) => {
            setNumOfVideo(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="" className="label-control">Courseid</label>
        <input
          onChange={(e) => {
            setCourseid(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>



      <div className="mb-3">
          <button onClick={addChaptertoDb} className="btn btn-success">
            Save
          </button>
          <Link to="/coursechapter" className="btn btn-danger float-end">
            Cancel
          </Link>
        </div>

    </div>     
    )
}

export default AddChapter