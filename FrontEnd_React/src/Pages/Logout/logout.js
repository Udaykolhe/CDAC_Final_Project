import { useNavigate } from 'react-router'

//import 'bootstrap/dist/css/bootstrap.min.css';
const Logout = () => {
  const navigate = useNavigate()
  sessionStorage.removeItem("user_id")
  sessionStorage.removeItem("email")
  sessionStorage.removeItem("password")

  return (
    <div>
      <h4>Logout successful</h4>
      <a href='/'>To home page</a>
    </div>
  )

}

export default Logout;
