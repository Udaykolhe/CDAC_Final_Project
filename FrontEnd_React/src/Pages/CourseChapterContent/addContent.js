import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import'./addContent.css'
import AdminNav from '../../Components/Navbar/adminNav'
import validation from "../CourseChapterContent/UserEnrollment/validation"

const AddContent = () => {
    const [contentid, setContentId] = useState('')
    const [timeRequiredToCompleteTheCourse, setTimeRequiredToCompleteTheCourse] = useState('')   
    const [chapterContent, setChapterContent] = useState('')
    const [courseChapter, setCourseChapter] = useState('')
    const [contentLink, setContentLink] = useState('')

    const [errors, setErrors] = useState({});
    
  
    const content = {timeRequiredToCompleteTheCourse,chapterContent,courseChapter,contentLink}

    const navigate = useNavigate()
  
    const addContenttoDb = (event) =>{
      event.preventDefault();
      setErrors(validation(content))
          //const artistId = 3         

         if(timeRequiredToCompleteTheCourse.length == 0){
             toast.warning('please enter time')
         } else if (chapterContent.length == 0){
             toast.warning('please enter content')
         }else{
              const body = {
                contentid,
                timeRequiredToCompleteTheCourse,
                chapterContent,
                courseChapter,
                contentLink,
              }

              const url = `${URL}/addContent`

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

      <>
      <AdminNav/>
       {/* {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>} */}
   
       <div className="wrapper">
         <div className="app-wrapper">
           <div>
             <h2 className="title">Add Content</h2>
           </div>
           <br />
           <form className="form-wrapper">
             <div className="row">
               <div className="col">
                 <div className="name">
                   <label className="label">Required_Time</label>
                   <input
                     className="input"
                     type="text"
                     name='timeRequiredToCompleteTheCourse'
                     value={timeRequiredToCompleteTheCourse}
                     placeholder="Req_Time"
                     onChange={(e)=>setTimeRequiredToCompleteTheCourse(e.target.value)}
                   />
                   {errors.timeRequiredToCompleteTheCourse &&  <p className="error">{errors.timeRequiredToCompleteTheCourse}</p>}
                 </div>
               </div>
              
             <div className="row">
               <div className="col">
                 <div className="name">
                   <label className="label">Content Name</label>
                   <input
                     className="input"
                     type="text"
                    name='chapterContent'
                     value={chapterContent}
                     placeholder="Content Name"
                     onChange={(e)=>setChapterContent(e.target.value)}
                   />
                    {errors.chapterContent && ( 
                    <p className="error">{errors.chapterContent}</p> 
                    )} 
                 </div>
               </div>
               <div className="col">
                 <div className="name">
                   <label className="label">Chapter_Id</label>
                   <input
                     className="input"
                     type="text"
                    name='courseChapter'
                     value={courseChapter}
                     placeholder="Chapter_id"
                     onChange={(e)=>setCourseChapter(e.target.value)}
                   />
                    {errors.courseChapter && ( 
                    <p className="error">{errors.courseChapter}</p> 
                    )} 
                 </div>
               </div>
              
               <div className="col">
                 <div className="name">
                   <label className="label">Content Link</label>
                   <input
                     className="input"
                     type="text"
                     name='contentLink'
                     value={contentLink}
                     placeholder="Content Link"
                     onChange={(e)=>setContentLink(e.target.value)}
                   />
                   {errors.contentLink && <p className="error">{errors.contentLink}</p>}
                 </div>
               </div>
             </div>
             
             </div>
                      <div>
               <button className='submit' onClick={addContenttoDb}>Add Content</button>
             </div>
           </form>
         </div>
       </div>
     </>

      
    )
}

export default AddContent

{/* <div className="col">
        <div>
        <AdminNav />
        </div>
          <h2 class = "title">Add Content</h2>
           
          {/* <div className="mb-3">
        <label htmlFor="" className="label-control">contentid</label>
        <input
          onChange={(e) => {
            setContentId(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div> */}




    //       <div className="mb-3">
    //     <label htmlFor="" className="label-control">TimeRequiredToCompleteTheCourse</label>
    //     <input
    //       onChange={(e) => {
    //         setTimeRequiredToCompleteTheCourse(e.target.value)
    //       }}
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>

    //   <div className="mb-3">
    //     <label htmlFor="" className="label-control">Chapter_Content</label>
    //     <input
    //       onChange={(e) => {
    //         setChapterContent(e.target.value)
    //       }}
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>
      
    //   <div className="mb-3">
    //     <label htmlFor="" className="label-control">Chapter_Id</label>
    //     <input
    //       onChange={(e) => {
    //         setCourseChapter(e.target.value)
    //       }}
    //       type="number"
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="" className="label-control">Content_Link</label>
    //     <input
    //       onChange={(e) => {
    //         setContentLink(e.target.value)
    //       }}
    //       type="text"
    //       className="form-control"
    //     />
    //   </div>



    //   <div className="mb-3">
    //       <button onClick={addContenttoDb} className="btn btn-success">
    //         Save
    //       </button>
    //       <Link to="/coursechaptercontent" className="btn btn-danger float-end">
    //         Cancel
    //       </Link>
    //     </div>

    // </div>    */}