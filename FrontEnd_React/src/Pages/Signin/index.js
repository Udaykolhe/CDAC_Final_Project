// import Image from 'react-bootstrap/Image';
// import image from 'D:/SigninSigupFormats/SigninSigupFormat/my-app/src/Pages/images/eler.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navibar from '../../Components/Navbar/Navibar';
import { URL } from '../../config'
import validation from "../Signin/validation";

import './index.css'
import "../Signin/style.css"



const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [dataAdded, setDataAdded] = useState('');

  const user ={email,password}

  const navigate = useNavigate()

//   const handleChange = (event) =>{
//     setValues({
//         ...values,
//         [event.target.name]: event.target.value,
//     });
// }

  const signinUser = (event) => {
    event.preventDefault();
    setDataIsCorrect(true);
     setErrors(validation(user))
     {
      const body = {
        email,
        password,
        role,
      }

      // url to make signin api call
      const url = `${URL}/user/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        
        if (result['status'] == 'success') {
             // get the data sent by server
          const { user_id, email, password, role } = result['data']
          // persist the logged in user's information for future use
          sessionStorage['id'] = user_id
          sessionStorage['email'] = email
          sessionStorage['password'] = password
          sessionStorage['role'] =role
          sessionStorage['loginStatus'] = 1


          // navigate to home component
          if (role === 'STUDENT') {
            setDataAdded("Login Successfully");
            console.log('usercourses')
            navigate("/usercourses")
          } else if (role === 'ADMIN') {
            setDataAdded("Login Successfully");
            navigate('/admin')
          }

        } else {
          setDataAdded("Invalid Email And Password");
        }
      })
    }
  }
  return (
    <>
      <Navibar />
      
     
      <div className='login-wrapper'>
        <div className='login-app-wrapper'>
          <div>
            <h2 className='title'>Sign in</h2>
          </div>
          {dataAdded && <h3 className="alert  alert-warning" role="alert">{dataAdded}</h3>}
          <form className='form-wrapper'>
            <div className='email'>
              <label className='label'>Email</label>
              <input className='input' type='text'
              name='email'
              required
              value={email}  onChange={(e)=>setEmail(e.target.value)} />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='name'>
              <label className='label'>Password</label>
              <input className='input' type='password'
              name='password'
              value={password} onChange={(e)=>setPassword(e.target.value)} />
              {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div>
              <button className='login-button' onClick={signinUser}>Log in</button>
            </div>
            <div className="form-group">
              <Link to="/forgotpassword">forget password?</Link>
            </div>
            <div className="form-group">
              New User? Register here <Link to="/signup">Register Now</Link>
            </div>

            <div>
              <Link to="/">Home</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin