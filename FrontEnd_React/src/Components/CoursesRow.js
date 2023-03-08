import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import { toast } from 'react-toastify'


const CoursesRow = (props) => {
  const { courses } = props
  const navigate = useNavigate()

  //  const deleteAlbum = () =>{
       
  //   const url = `${URL}/album/delete/${album.albumId}`
  //   axios.post(url).then((response) => {
  //     const result = response.data


  //     if (result['status'] == 'success') {
  //       toast.success('album deleted successfully')
  //       navigate('/admin')
  //     } else {
  //       toast.error(result['error'])
  //     }
  //   })

  //  }

  return (
    
    <tr>
       <td className="table-success">{courses.courseid}</td>
     
       <td className="table-success">{courses.courseTitle}</td>

      <td className="table-success">{courses.courseBrief}</td>

      <td className="table-success">{courses.numOfChapter}</td>

      {/* <td className="table-success">{courses.user}</td> */}
      
      <td>
        {/* <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            navigate('/add-Courses-to-Course', { courses: courses })
          }}
          className="btn btn-success btn-sm">
          Add Courses
        </button> */}

        <button   onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            navigate('/delete-Courses',{state: {id: courses.courseid} })
          }}
        
        className="btn btn-danger float-end">
            delete
          </button>

      </td>
    </tr>
    
  )
}

export default CoursesRow
