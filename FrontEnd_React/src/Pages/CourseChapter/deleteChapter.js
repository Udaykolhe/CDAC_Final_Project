import { useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios from 'axios' 
 const DeleteChapter = () =>{

  
    const navigate = useNavigate()
    const { state } = useLocation()
    
    const deleteChapterById = () =>{
        const { courseChapterid } = state
        const url = `${URL}/chapter/delete/${courseChapterid}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("chapter deleted Successfully")
                navigate('/admin')
             }else {
                 toast.error("Chapter not deleted", )
             }
        })
    }

    useEffect(() => {
        deleteChapterById()
      }, [])

     
 }

 export default DeleteChapter