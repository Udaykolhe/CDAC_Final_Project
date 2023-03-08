// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import ReactPlayer from 'react-player';
// import './index.css'
// import ContentNavi from '../../Components/Navbar/ContentNavi';

// const Exceptionhandling = () => {
//   return (

//     <div className='Content'>
//         <ContentNavi/>
//         <h1>Exceptions in Java</h1>

//         <br/> <br/>
//         <p>Exception Handling in Java is one of the effective means to handle the runtime errors so that the regular flow of the application can be preserved. Java Exception Handling is a mechanism to handle runtime errors such as ClassNotFoundException, IOException, SQLException, RemoteException, etc.</p>

// <h3>What is an Exception?</h3>
// <p>An exception is an unwanted or unexpected event, which occurs during the execution of a program i.e at run time, that disrupts the normal flow of the program’s instructions. Exceptions can be caught and handled by the program. When an exception occurs within a method, it creates an object. This object is called the exception object. It contains information about the exception such as the name and description of the exception and the state of the program when the exception occurred.</p>


// <h3>An exception can occur for many reasons. Some of them are:</h3>
// <ul>
//     <li>Invalid user input</li>
//     <li>Device failure</li>
//     <li>Loss of network connection</li>
//     <li>Physical limitations (out of disk memory)</li>
//     <li>Code errors</li>
//     <li>Opening an unavailable file</li>
// </ul>

// <h3>What is an Error? </h3>
// <p>Errors represent irrecoverable conditions such as Java virtual machine (JVM) running out of memory, memory leaks, stack overflow errors, library incompatibility, infinite recursion, etc.

// Errors are usually beyond the control of the programmer and we should not try to handle errors.</p>

// <h3>Error vs Exception</h3>
// <ul>
//     <li>Error: An Error indicates a serious problem that a reasonable application should not try to catch.</li>
//     <li>Exception: Exception indicates conditions that a reasonable application might try to catch.</li>
// </ul>


// <h3>Exception Hierarchy</h3>
// <p>All exception and errors types are subclasses of class Throwable, which is the base class of the hierarchy. One branch is headed by Exception. This class is used for exceptional conditions that user programs should catch. NullPointerException is an example of such an exception. Another branch, Error is used by the Java run-time system(JVM) to indicate errors having to do with the run-time environment itself(JRE). StackOverflowError is an example of such an error.</p>
// <Carousel>
//                 <Carousel.Item interval={1000}>
//                 <Carousel.Caption>
//                    {/* // <h2 style={{ color: 'orange' }}>Your Car Our Responsibility...</h2> */}
                    
//                 </Carousel.Caption>
//                     <img src={require('https://media.geeksforgeeks.org/wp-content/uploads/Exception-in-java1.png')} className="img"  ></img>
//                 </Carousel.Item>    
 
// </Carousel>

// <h3>Types of Exceptions</h3> 
// <p>Java defines several types of exceptions that relate to its various class libraries. Java also allows users to define their own exceptions.</p>
// <Carousel>
//                 <Carousel.Item interval={1000}>
//                 <Carousel.Caption>
//                    {/* // <h2 style={{ color: 'orange' }}>Your Car Our Responsibility...</h2> */}
                    
//                 </Carousel.Caption>
//                     <img src={require('https://media.geeksforgeeks.org/wp-content/uploads/20220120111809/Group21-660x330.jpg')} className="img"  ></img>
//                 </Carousel.Item>    
 
// </Carousel>

// <h3>Exceptions can be Categorized into 2 Ways:</h3>
// <ul>
//     <li>Built-in Exceptions</li>
//     <ul>
//         <li>Checked Exception</li>
//         <li>Unchecked Exception</li>
//     </ul>
//     <li>User-Defined Exceptions</li>
// </ul>

// <h3>1. Built-in Exceptions:</h3> 
// <p>Built-in exceptions are the exceptions that are available in Java libraries. These exceptions are suitable to explain certain error situations.</p>
// <ul>
//     <li>Checked Exceptions:</li>
//     <p>Checked exceptions are called compile-time exceptions because these exceptions are checked at compile-time by the compiler.</p>
//     <li>Unchecked Exceptions:</li>
//     <p>The unchecked exceptions are just opposite to the checked exceptions. The compiler will not check these exceptions at compile time. In simple words, if a program throws an unchecked exception, and even if we didn’t handle or declare it, the program would not give a compilation error.</p>
// </ul>

// <h3>2. User-Defined Exceptions:</h3>
//  <p>Sometimes, the built-in exceptions in Java are not able to describe a certain situation. In such cases, users can also create exceptions which are called ‘user-defined Exceptions’. </p>

// <p>The advantages of Exception Handling in Java are as follows:</p>
// <ul>
//     <li>Provision to Complete Program Execution</li>
//     <li>Easy Identification of Program Code and Error-Handling Code</li>
//     <li>Propagation of Errors</li>
//     <li>Meaningful Error Reporting</li>
//     <li>Identifying Error Types</li>
// </ul>






// <div className='player' controls>
//   <ReactPlayer url='https://www.youtube.com/watch?v=cjNVLIBXoes'/>
// </div>



//     </div>
//     )
// }
    

// export default Exceptionhandling