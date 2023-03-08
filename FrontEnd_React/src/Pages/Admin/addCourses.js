import axios from 'axios'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router'
import { URL } from '../../config'
import AdminNav from '../../Components/Navbar/adminNav'
import { toast } from 'react-toastify'
import validation from './validation';
// courseid
const AddCourses = () => {
  const [courseid, setCourseid] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const [courseBrief, setCourseBrief] = useState('')
  const [numOfChapter, setNumofChapter] = useState('')
  const [User_id, setUser_id] = useState('')

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);
const [dataAdded, setDataAdded] = useState('');

  const course = {courseTitle,courseBrief,numOfChapter,User_id}

  const navigate = useNavigate()
  // const { state } = useLocation()



  const addCourseToDB = (event) => {
    // const { User_id } = state
    event.preventDefault();
    setDataIsCorrect(true);
    setErrors(validation(course))
    {
      const body = {
        courseid,
        courseTitle,
        courseBrief,
        numOfChapter,
        User_id
      }


      const url = `${URL}/${User_id}/courses`
      console.log(body)


      if(dataIsCorrect == true){

 axios.post(url, body).then((response) => {

        // get the server result
        const result = response.data
        if (result['status'] == 'success') {
          toast.success('Add Course')
          navigate('/admin')
        } else {
          toast.error(result['error'])
        }
      })
      .catch(error => {
        console.log('Something went wrong', error);
        setDataAdded("Error While Registration");
    })
      }
     
    }

  }

  return (
    <>
   <AdminNav/>
    {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>}

    <div className="wrapper">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Add Course</h2>
        </div>
        <br />
        <form className="form-wrapper">
          <div className="row">
            <div className="col">
              <div className="name">
                <label className="label">Course_Title</label>
                <input
                  className="input"
                  type="text"
                  name='courseTitle'
                  value={courseTitle}
                  placeholder="Course_Name"
                  onChange={(e)=>setCourseTitle(e.target.value)}
                />
                {errors.courseTitle &&  <p className="error">{errors.courseTitle}</p>}
              </div>
            </div>

            <div className="col">
              <div className="name">
                <label className="label">Description</label>
                <textarea
                  className="input"
                  type="text"
                  name='courseBrief'
                  value={courseBrief}
                  placeholder= "50+ Introduction"
                  onChange={(e)=>setCourseBrief(e.target.value)}
                />
                {errors.courseBrief && <p className="error">{errors.courseBrief}</p>}
              </div>
            </div>
           
          <div className="row">
            <div className="col">
              <div className="name">
                <label className="label">Chapter Count</label>
                <input
                  className="input"
                  type="text"
                                   name='numOfChapter'
                  value={numOfChapter}
                  placeholder="Number Of Chapter"
                  onChange={(e)=>setNumofChapter(e.target.value)}
                />
                 {errors.numOfChapter && ( 
                 <p className="error">{errors.numOfChapter}</p> 
                 )} 
              </div>
            </div>
            <div className="col">
              <div className="name">
                <label className="label">User_Id</label>
                <input
                  className="input"
                  type="number"
                  name='user'
                  value={User_id}
                  placeholder="User Id"
                  onChange={(e)=>setUser_id(e.target.value)}
                />
                {errors.User_id && <p className="error">{errors.User_id}</p>}
              </div>
            </div>
          </div>
        
          </div>
                   <div>
            <button className='submit' onClick={addCourseToDB}>Add Course</button>
          </div>
        </form>
      </div>
    </div>
  </>

    
  )
}

export default AddCourses

{/* <div className="col">
      <div>
        <AdminNav />
      </div>
      <h2 class="title">Add Courses</h2>




      <div className="mb-3">
        <label htmlFor="" className="label-control">CourseTitle</label>
        <input
          onChange={(e) => {
            setCourseTitle(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">Descriptions</label>
        <input
          onChange={(e) => {
            setCourseBrief(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">NumofChapter</label>
        <input
          onChange={(e) => {
            setNumofChapter(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label-control">user_id</label>
        <input
          onChange={(e) => {
            setUser_id(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addCourseToDB} className="btn btn-success">
          Save
        </button>
        <Link to="/admin" className="btn btn-danger float-end">
          Cancel
        </Link>
      </div>

    </div> */}