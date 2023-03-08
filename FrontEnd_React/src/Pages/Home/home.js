import "./Home.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Navibar from "../../Components/Navbar/Navibar";
import Pic from "../../Pages/images/el.webp";
import Pic1 from "../../Pages/images/eler.jpg";
import Pic2 from "../../Pages/images/elearn1.webp";
import Pic3 from "../../Pages/images/elearning1.jpg";
import Pic4 from "../../Pages/images/e_learning.webp";

const Home = () => {

  return (
    <div id="main">
      <Navibar />
      <section id="home">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className='col-md-10'>
              <h1 className="text-white display-4">The beautiful thing about learning is that nobody can take it away from you</h1>
              <p className="text-white"> Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</p>
              
              </div></div>
          </div>
          
      <div style={{ display: "block", width: 1120, padding: 1 }}>

        <Carousel>
          <Carousel.Item interval={500}>
            <Carousel.Caption>
              // <h2 style={{ color: "orange" }}></h2>
            </Carousel.Caption>
            <img src={Pic1}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <Carousel.Caption></Carousel.Caption>
            <img
              src={Pic2}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <Carousel.Caption></Carousel.Caption>
            <img
              src={Pic3}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={700}>
            <Carousel.Caption></Carousel.Caption>
            <img
              src={Pic4}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={600}>
            <Carousel.Caption></Carousel.Caption>
            <img src={Pic}
              className="img"
            ></img>
          </Carousel.Item>
        </Carousel>

      </div>
      </section> 
    </div>
  );
};

export default Home;
