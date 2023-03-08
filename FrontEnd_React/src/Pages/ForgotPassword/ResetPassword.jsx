import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navibar from '../../Components/Navbar/Navibar';
import { URL } from '../../config'

function ResetPassword() {

    const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')
    const [dataAdded, setDataAdded] = useState('');

    const navigate = useNavigate();


const updatepassword = (event)=>{
    event.preventDefault();
    console.log("sending",);

    const body = {
        email,
         password,
    }
    const url = `${URL}/user/updatePassword`

    axios.post(url,body).then((response) =>{
        const result = response.data
        if (result['status'] == 'success') {
            // get the data sent by server
         const { user_id, email, password, role } = result['data']
        // persist the logged in user's information for future use
         sessionStorage['id'] = user_id
         sessionStorage['email'] = email
         sessionStorage['password'] = password
         sessionStorage['role'] =role
         sessionStorage['loginStatus'] = 1
        }

        toast.success("Password Reset Successfully");
        navigate("/signin")
    }).catch(error => {
        console.log('Something went wrong', error);
        setDataAdded("Invalid Password");
    });


}

  return (
    <>
    <Navibar/>
   
   <div className='login-wrapper'>
       <div className='login-app-wrapper'>
       {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>
    }
           <div>
               <h2 className='title'>Enter New Password</h2>
              </div>
           <br/>
           
           <form className='form-wrapper'>
               <div className='email'>
                   <label className='label'>New Password</label>
                   <input className='input' type='password' placeholder='Enter Password' name='password' value={password} onChange={(e)=> setPassword(e.target.value    )} required/>
                   
               </div>
               <div>
           <button className="submit" onClick={updatepassword}>
             Submit
           </button>
         </div>
               <div>
               <Link to="/signin">Login</Link>
               </div>
           </form>
       </div>
   </div>
   </>
  )
}

export default ResetPassword