import './courses.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navibar from '../../Components/Navbar/Navibar';
import Spring from "../images/springl.jpg"
import Html from "../images/html.png"
import Java from "../images/Java.png"
import Reacts from "../images/react.png"



const Courses = () => {
    return (
        <div className='Courses'>


            <Navibar />


            <div className="side">



                <div className="row" >
                    <h2 className="tag"><mark><em>Courses Available</em></mark></h2>
                </div>

                <br />

                <div className="row" >
                    <div className="col" style={{ display: "block", padding: 30 }}>
                        <div className="row">
                            <img src={Spring} className="features" style={{ height: 120, width: 150, padding: 1 }}></img>
                        </div>
                        <div className="box"  >

                            <b>Spring Boot :-</b>
                            Spring Boot Tutorial provides basic and advanced concepts of Spring Framework. Our Spring Boot Tutorial is designed for beginners and professionals both.

                            Spring Boot is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring framework.

                            Our Spring Boot Tutorial includes all topics of Spring Boot such, as features, project, maven project, starter project wizard, Spring Initializr, CLI, applications, annotations, dependency management, properties, starters, Actuator, JPA, JDBC, etc                </div>
                    </div>

                    <div className="col" style={{ display: "block", padding: 30 }}>
                        <div className="row">
                            <img src={Java} className="features" style={{ height: 120, width: 150, padding: 1 }}></img>
                        </div>
                        <div className="box"  >

                            <b>Java Tutorial : -</b>
                            Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. </div>

                        <br />
                        <br />
                        <br />
                    </div>
                </div>



                <br />

                <div className="row" >
                    <div className="col" style={{ display: "block", padding: 30 }}>
                        <div className="row">
                            <img src={Html} className="features" style={{ height: 120, width: 150, padding: 1 }}></img>
                        </div>
                        <div className="box"  >

                            <b> HTML Tutorial :-</b>
                            HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.</div>
                    </div>

                    <div className="col" style={{ display: "block", padding: 30 }}>
                        <div className="row">
                            <img src={Reacts} className="features" style={{ height: 120, width: 150, padding: 1 }}></img>
                        </div>
                        <div className="box">
                            <b> ReactJS Tutorial:-</b>
                            ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.

                            ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.
                        </div>
</div>
                </div>


            </div>
        </div>


    )
};

export default Courses
