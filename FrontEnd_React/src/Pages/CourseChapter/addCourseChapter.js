import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import AdminNav from '../../Components/Navbar/adminNav'
import { toast } from 'react-toastify'
import'./addCourseChapter.css'

import validation from './validation';

const AddChapter = () => {
    const [courseChapterid, setCourseChapterId] = useState('')
    const [chapterTitle, setChapterTitle] = useState('')   
    const [numOfVideo, setNumOfVideo] = useState('')
    const [courseid, setCourseid] = useState('')

    const [errors, setErrors] = useState({});
    const [values , setValues] = useState({});
  
    const chapter = {chapterTitle,numOfVideo,courseid}

    const navigate = useNavigate()
  
    const addChaptertoDb = (event) =>{

      event.preventDefault();
      setErrors(validation(chapter))
          //const artistId = 3         
{
              const body = {
                courseChapterid,
                chapterTitle,
                numOfVideo,
                courseid,
              }

              const url = `${URL}/${courseid}/chapter`

              axios.post(url, body).then((response) => {

                 // get the server result
                  const result = response.data
                  if (result['status'] == 'success'){
                    toast.success('added Chapter')
                     navigate('/admin')
                  }else {
                    toast.error(result['error'])
                  }
              })
         }

    }

    return (

      <>
   <AdminNav/>
    {/* {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>} */}

    <div className="wrapper">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Add Chapter</h2>
        </div>
        <br />
        <form className="form-wrapper">
          <div className="row">
            <div className="col">
              <div className="name">
                <label className="label">Chapter Name</label>
                <input
                  className="input"
                  type="text"
                  name='chapterTitle'
                  value={chapterTitle}
                  placeholder="Chapter_Name"
                  onChange={(e)=>setChapterTitle(e.target.value)}
                />
                {errors.chapterTitle &&  <p className="error">{errors.chapterTitle}</p>}
              </div>
            </div>
           
          <div className="row">
            <div className="col">
              <div className="name">
                <label className="label">Videos</label>
                <input
                  className="input"
                  type="number"
                  name='numOfVideo'
                  value={numOfVideo}
                  placeholder="Vedios No."
                  onChange={(e)=>setNumOfVideo(e.target.value)}
                />
                 {errors.numOfVideo && ( 
                 <p className="error">{errors.numOfVideo}</p> 
                 )} 
              </div>
            </div>
            <div className="col">
              <div className="name">
                <label className="label">Course_Id</label>
                <input
                  className="input"
                  type="number"
                  name='courses'
                  value={courseid}
                  placeholder="Course ID"
                  onChange={(e)=>setCourseid(e.target.value)}
                />
                {errors.courseid && <p className="error">{errors.courseid}</p>}
              </div>
            </div>
          </div>
                </div>
                   <div>
            <button className='submit' onClick={addChaptertoDb}>Add Chapter</button>
          </div>
        </form>
      </div>
    </div>
  </>


   
    )
}

export default AddChapter

// <div className="col">
// <div>
// <AdminNav />
// </div>
//   <h2 class = "title">Add Chapter</h2>
 
//   <div className="mb-3">
// <label htmlFor="" className="label-control">ChapterTitle</label>
// <input
//   onChange={(e) => {
//     setChapterTitle(e.target.value)
//   }}
//   type="text"
//   className="form-control"
// />
// </div>

// <div className="mb-3">
// <label htmlFor="" className="label-control">NumOfVideo</label>
// <input
//   onChange={(e) => {
//     setNumOfVideo(e.target.value)
//   }}
//   type="number"
//   className="form-control"
// />
// </div>

// <div className="mb-3">
// <label htmlFor="" className="label-control">Courseid</label>
// <input
//   onChange={(e) => {
//     setCourseid(e.target.value)
//   }}
//   type="number"
//   className="form-control"
// />
// </div>



// <div className="mb-3">
//   <button onClick={addChaptertoDb} className="btn btn-success">
//     Save
//   </button>
//   <Link to="/coursechapter" className="btn btn-danger float-end">
//     Cancel
//   </Link>
// </div>

// </div>     