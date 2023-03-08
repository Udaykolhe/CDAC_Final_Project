import { useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios from 'axios' 
 const DeleteContent = () =>{

  
    const navigate = useNavigate()
    const { state } = useLocation()
    
    const deleteContentById = () =>{
        const { id } = state
        const url = `${URL}/content/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("content deleted Successfully")
                navigate('/coursechaptercontent')
             }else {
                 toast.error("Content not deleted", )
             }
        })
    }

    useEffect(() => {
        deleteContentById()
      }, [])

     
 }

 export default DeleteContent