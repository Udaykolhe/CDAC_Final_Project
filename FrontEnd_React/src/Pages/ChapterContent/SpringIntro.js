// import React from 'react'
// import ReactPlayer from 'react-player';
// import './index.css'
// import ContentNavi from '../../Components/Navbar/ContentNavi';
// const SpringIntroduction = () => {
//   return (
//     <div className='Content'>

//         <ContentNavi/>
//          <h1>Introduction to Spring Boot</h1>
//          <br/> <br/>
//          <p>Spring is widely used for creating scalable applications. For web applications Spring provides Spring MVC which is a widely used module of spring which is used to create scalable web applications.</p>
//          <p>But main disadvantage of spring projects is that configuration is really time-consuming and can be a bit overwhelming for the new developers. Making the application production-ready takes some time if you are new to the spring.</p>
//          <p>Solution to this is Spring Boot. Spring Boot is built on the top of the spring and contains all the features of spring. And is becoming favourite of developer’s these days because of it’s a rapid production-ready environment which enables the developers to directly focus on the logic instead of struggling with the configuration and set up.</p>
//          <p>Spring Boot is a microservice-based framework and making a production-ready application in it takes very less time. Prerequisite for Spring Boot is the basic knowledge Spring framework.</p>

//                 <br/>
//          <div className='player' controls>
//             <ReactPlayer url='https://www.youtube.com/watch?v=KRMNTudb0AY'/>
//                 </div>
                
//                 <br/>
// <h4>Features of Spring Boot</h4>
// <p>Spring Boot is built on the top of the conventional spring framework. So, it provides all the features of spring and is yet easier to use than spring.</p>
// <ul>
//     <h6>It allows to avoid heavy configuration of XML which is present in spring:</h6>
//     <ul>
//         <li>Unlike the Spring MVC Project, in spring boot everything is auto-configured. We just need to use proper configuration for utilizing a particular functionality.</li>
//     </ul>
// </ul>
// <ul>
//     <h6>It provides easy maintenance and creation of REST end points:</h6>
//     <ul>
//         <li>Creating a REST API is very easy in Spring Boot. Just the annotation @RestController and @RequestMapping(/endPoint) over the controller class does the work.</li>
//     </ul>
// </ul>
// <ul>
//     <h6>It includes embedded Tomcat-server:</h6>
//     <ul>
//         <li>Unlike Spring MVC project where we have to manually add and install the tomcat server, Spring Boot comes with an embedded Tomcat server, so that the applications can be hosted on it.</li>
//     </ul>
// </ul>
// <ul>
//     <h6>Deployment is very easy, war and jar file can be easily deployed in the tomcat server:</h6>
//     <ul>
//         <li>war or jar files can be directly deployed on the Tomcat Server and Spring Boot provides the facility to convert our project into war or jar files. Also, the instance of Tomcat can be run on the cloud as well.</li>
//     </ul>
// </ul>
// <ul>
//     <h6>Microservice Based Architecture:</h6>
//     <ul>
//         <li>Microservice, as the name suggests is the name given to a module/service which focuses on a single type of feature, exposing an API(application peripheral interface).
// Let us consider an example of a hospital management system.</li>
//         <ul>
//             <li>In case of monolithic systems, there will be a single code containing all the features which are very tough to maintain on a huge scale.</li>
//             <li>But in the microservice-based system, each feature can be divided into smaller subsystems like service to handle patient registration, service to handle database management, service to handle billing etc.</li>
//         </ul>
//         <li>Microservice based system can be easily migrated as only some services need to be altered which also makes debugging and deployment easy. Also, each service can be integrated and can be made in different technologies suited to them.</li>
//     </ul>
// </ul>
// <h4>Spring Boot Architecture</h4>
// <p>To understand the architecture of Spring Boot, let us first see different layers and classes present in it.</p>
// <ul>
//     <li>Layers in Spring Boot: There are four main layers in Spring Boot.</li>
//     <ul>
//         <li>Presentation Layer: As the name suggests, it consists of views(i.e. frontend part)</li>
//         <li>Data Access Layer: CRUD (create, retrieve, update, delete) operations on the database comes under this category.</li>
//         <li>Service Layer: This consist of service classes and uses services provided by data access layers.</li>
//         <li>Integration Layer: It consists of web different web services(any service available over the internet and uses XML messaging system).</li>
//     </ul>
//     <li>Then we have utility classes, validator classes and view classes.</li>
//     <li>All the services provided by the classes are implemented in their corresponding classes and are retrieved by implementing the dependency on those interfaces.</li>
// </ul>

// <h4>Spring Boot flow architecture:</h4>

// <ul>
//     <li>Since Spring boot uses all the features/modules of spring-like Spring data, Spring MVC etc. so the architecture is almost the same as spring MVC, except for the fact that there is no need of DAO and DAOImpl classes in Spring boot.</li>
//     <li>Creating a data access layer needs just a repository class instead which is implementing CRUD operation containing class.</li>
//     <li>A client makes the https request(PUT/GET).</li>
//     <li>Then it goes to controller and the controller mapped with that route as that of request handles it, and calls the service logic if required.</li>
//     <li>Business logic is performed in the service layer which might be performing the logic on the data from the database which is mapped through JPA with model/entity class.</li>
//     <li>Finally, a JSP page is returned in the response if no error occurred.</li>
// </ul>

         






//     </div>
//     )
// }

// export default SpringIntroduction;