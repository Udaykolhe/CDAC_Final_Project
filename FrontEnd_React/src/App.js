import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import UserCourseChapterContent from './Pages/UserCourseChapterCourse/usercoursechaptercontent'
import UserContentRow from './Components/UserContentRow'
import Logout from './Pages/Logout/logout'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Admin from './Pages/Admin/admin'
import Profile from './Pages/Profile/profile'
import UserCourses from './Pages/UserCourses/usercourses'
import UserCoursesRow from './Components/UserCoursesRow'
import UserChapterRow from './Components/UserChapterRow'
import UserCourseChapter from './Pages/UserCourseChapter/userchapter'
import DeleteCourses from './Pages/Admin/deleteCourses'
import AddCourses from './Pages/Admin/addCourses'
import AddContent from './Pages/CourseChapterContent/addContent'
import CourseChapter from './Pages/CourseChapter/courseChapter'
import CoursesRow from './Components/CoursesRow'
import AddChapter from './Pages/CourseChapter/addCourseChapter'
import DeleteChapter from './Pages/CourseChapter/deleteChapter'
import DeleteContent from './Pages/CourseChapterContent/deleteContent'
import Home from './Pages/Home/home'
import ForgotPassword from './Pages/ForgotPassword'
import UpdateProfile from './Pages/UpdateProfile'
import User from './Pages/User/user'
import DeleteUser from './Pages/User/deleteUser'
import Enrollment from './Pages/Enrollment/enrollment'
import CourseChapterContent from './Pages/CourseChapterContent/coursechaptercontent'
import OOPS from './Pages/ChapterContent/oops'
import Aboutus from './Pages/Aboutus/Aboutus'
import Courses from './Pages/courses/courses'
import Exceptionhandling from './Pages/ChapterContent/Exceptionhandling'
import HtmlDoctype from './Pages/ChapterContent/HTMl'
import HtmlIntroduction from './Pages/ChapterContent/HtmlIntro'
import DataTypes from './Pages/ChapterContent/CsharpDatatypes'
import Identifires from './Pages/ChapterContent/CsharpIdentifiers'
import SpringJPA from './Pages/ChapterContent/SpringJpa'
import SpringIntroduction from './Pages/ChapterContent/SpringIntro'
import AdminNav from './Components/Navbar/adminNav'
import Feedback from './feedback/feedback'
import { Navbar } from 'react-bootstrap'
import React from 'react'
import ErrorPage from './Components/error/ErrorPage'
import ResetPassword from './Pages/ForgotPassword/ResetPassword'
import Adminprofile from './Pages/Profile/Adminprofile'
function App() {
  return (
    <React.Fragment>
      <div className="container">

        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/userContent" element={<UserCourseChapterContent />} />
            <Route path="/usercontentRow" element={<UserContentRow />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/usercourses" element={<UserCourses />} />
            <Route exact path="/usercoursesRow" element={<UserCoursesRow />} />
            <Route exact path="/userchapter" element={<UserCourseChapter />} />
            <Route exact path="/userchapterRow" element={<UserChapterRow />} />
            <Route exact path="/delete-user" element={<DeleteUser />} />

            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/adminprofile" element={<Adminprofile />} />

            <Route path="/add-chapter" element={<AddChapter />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/addContent" element={<AddContent />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route exact path="/delete-Courses" element={<DeleteCourses />} />
            <Route exact path="/delete-chapter" element={<DeleteChapter />} />
            <Route exact path="/delete-content" element={<DeleteContent />} />

            <Route exact path="/coursesRow" element={<CoursesRow />} />
            <Route exact path="/courseChapter" element={<CourseChapter />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
   
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/coursechaptercontent" element={<CourseChapterContent />} />

            <Route path="/OOPS" element={<OOPS />} />
            <Route path="/Exceptionhandling" element={<Exceptionhandling />} />
            <Route path="/HtmlDoctype" element={<HtmlDoctype />} />
            <Route path="/HtmlIntroduction" element={<HtmlIntroduction />} />DataTypes
            <Route path="/DataTypes" element={<DataTypes />} />
            <Route path="/Identifires" element={<Identifires />} />
            <Route path="/SpringJPA" element={<SpringJPA />} />
            <Route path="/SpringIntroduction" element={<SpringIntroduction />} />
            <Route path='/AdminNav' element={<AdminNav />} />

            <Route path="*" element={<ErrorPage />} />




          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
    </React.Fragment>

  );
}

export default App;
