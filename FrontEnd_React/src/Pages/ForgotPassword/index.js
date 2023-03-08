import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Navibar from '../../Components/Navbar/Navibar'

const ForgotPassword = () => {
  const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')
 
  const [dataAdded, setDataAdded] = useState('');

  const navigate = useNavigate()

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
  
  const sendOTP = (event) => {
   event.preventDefault();
   console.log("sending",);

      // url to make signin api call
      const url = `${URL}/user/otp/${email}`

      // make api call using axios
      axios.post(url).then((response) => {
        console.log("Reterive password", response.data);  
        setDataAdded("We have sent OTP to Your Register email");
        navigate("/forgotpassword")
      })
      .catch(error => {
          console.log('Something went wrong', error);
          setDataAdded("Invalid Email");
      })
      //   // get the server result
      //   const result = response.data
      //   console.log(result)
      //   if (result['status'] == 'success') {
      //     toast.success('Welcome to the application')

      //     // get the data sent by server
      //     const { id, firstName, lastName } = result['data']

      //     // persist the logged in user's information for future use
      //     sessionStorage['id'] = id
      //     sessionStorage['firstName'] = firstName
      //     sessionStorage['lastName'] = lastName

      //     // navigate to home component
      //     navigate('/')
      //   } else {
      //     toast.error('Invalid user name or password')
      //   }
      // })
    
  }

  return (


    <>
    <Navibar/>
   
   <div className='login-wrapper'>
       <div className='login-app-wrapper'>
      
           <div>
               <h2 className='title'>Share your registered email</h2>
               <span className="myspan">You will get a mail regarding your password</span>
           </div>
           <br/>
           
          
           <form className='form-wrapper'>
               <div className='email'>
                   <label className='label'>Email</label>
                   <input className='input' type='email' placeholder='Enter Register Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                       </div>
              
                       <button onClick={sendOTP} className="btn btn-success"  >
             Send OTP
           </button>
           {dataAdded && <h6 class="alert alartbox alert-primary" role="alert">{dataAdded}</h6>
    }
           
            
            <div className='email'>
                   <label className='label'>OTP</label>
                   <input className='input' type='number' placeholder='Enter OTP' name='otp' required  />
                   
               </div>

               {/* <button onClick={true}  className="btn btn-success"  >
             Varify
           </button> */}

               <div>
          
         </div>

         <div className='email'>
                   <label className='label'>New Password</label>
                   <input className='input' type='password' placeholder='Enter Password' name='password' value={password} onChange={(e)=> setPassword(e.target.value    )} />
                   
               </div>
               <button onClick={updatepassword} className="submit"  >
            Verify & Submit
           </button>
               <div>
               <Link to="/signin">Login</Link>
               </div>
           </form>
       </div>
   </div>
   </>
  )
    
}

export default ForgotPassword

{/* <div>
    <Navibar/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Forgot Password</h1>
      <br></br>
     
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                required = {true} 
                
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
              New Password
              </label>
              <input
                onChange={(e) => {
                  setNewPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div> */}

            {/* <div className="mb-3">
              <label htmlFor="" className="label-control">
             Confirm New Password
              </label>
              <input
                onChange={(e) => {
                 setConfirmNewPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div> */}
           
  //           <div className="mb-3">
  //             <button onClick={forgotpassword} className="btn btn-primary">
  //               Change Password  
  //             </button>
  //             <br></br>
  //             <br></br>
  //             <div>
  //              after changing password you can signin here  <Link to="/signin">Signin here.</Link>
  //             </div>
  //             <br></br>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col"></div>
  //     </div>
  //   </div>
  // ) */}