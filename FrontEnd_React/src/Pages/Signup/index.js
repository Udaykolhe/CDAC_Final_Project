import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Navibar from '../../Components/Navbar/Navibar';
import './index.css'
import "../Signup/style.css"
import validation from './validation';

const Signup = () => {

  const [fName, setFirstName] = useState('')
  const [lName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrationDate, setRegistrationDate] = useState(new Date())
  const [qualification, setQualification] = useState('')
  const [publishedCourses, setnum_Of_Published_Courses] = useState('4')
  const [contact, setContact] = useState('')
  const [adharNo, setAdharNo] = useState('')
  const [role, setRole] = useState('STUDENT')

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [dataAdded, setDataAdded] = useState('');
  const [dataIsCorrect, setDataIsCorrect] = useState(false);



  const user = { fName, lName, email, password, qualification, contact };

  // used to navigate from one component to another
  const navigate = useNavigate()


  const signupUser = (event) => {
    event.preventDefault();
    setDataIsCorrect(true);
    setErrors(validation(user))
      const body = {
        fName,
        lName,
        email,
        password,
        registrationDate,
        qualification,
        publishedCourses,
        contact,
        adharNo,
        role,
      }
     // url to call the api
      const url = `${URL}/user/signup`
     // http method: post
      // body: contains the data to be sent to the API
      if(dataIsCorrect == true){
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
         if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // navigate to the signin page
          navigate('/signin')
        } 
         }).catch(error => {
        console.log('Something went wrong', error);
        setDataAdded("Error While Registration");
    })
    }
      }

  // let today = new Date().toISOString().slice(0, 10)

  // console.log(today)


  return (
    <>
      <Navibar />
 

      <div className="wrapper">
        <div className="app-wrapper">
        {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>}
          <div>
            <h2 className="title">Register Your Details</h2>
          </div>
          <br />
          <form className="form-wrapper">
            <div className="row">
              <div className="col">
                <div className="name">
                  <label className="label">First Name</label>
                  <input
                    className="input"
                    type="text"
                    name='fname'
                    value={fName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.fName && <p className="error">{errors.fName}</p>}
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <label className="label">Last Name</label>
                  <input
                    className="input"
                    type="text"
                    name='lname'
                    value={lName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lName && <p className="error">{errors.lName}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="name">
                  <label className="label">Contact Number</label>
                  <input
                    className="input"
                    type="number"
                    min='7000000000'
                    max='9999999999'
                    name='contact'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  {errors.contact && (
                    <p className="error">{errors.contact}</p>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <label className="label">Email</label>
                  <input
                    className="input"
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="name">
                  <label className="label">Password</label>
                  <input
                    className="input"
                    type="password"
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="error">{errors.password}</p>}
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <label className="label">Qualification</label>
                  <input
                    className="input"
                    type="text"
                    name='qualification'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                  {errors.qualification && <p className="error">{errors.qualification}</p>}
                </div>
              </div>
            </div>

            <div>
              <button className='submit' onClick={signupUser}>Register</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}


export default Signup
