// import React from 'react'
// import ReactPlayer from 'react-player'
// import './index.css'
// import ContentNavi from '../../Components/Navbar/ContentNavi'



// const OOPS = () => {
//   return (
    
//     <div className='Content'>

// <ContentNavi/>
      
// <h1>Object Oriented Programming (OOPs) Concept in Java</h1>
// <br/> <br/>
// <h2>OOPs Concepts are as follows:</h2>

// <ul>
//  <li>Class</li>
//  <li>Object</li>
//  <li>Method and method passing</li>
//  <li>Pillars of OOPS
//  <ul>
//   <li>Abstraction</li>
//   <li>Encapsulation</li>
//   <li>Inheritance</li>
//   <li>Polymorphism</li>
//  </ul>
//  </li>
// </ul>

// <h2>Class</h2>
// <p>A class is a user defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. 
//   In general, class declarations can include these components, in order: </p>
//   <ul>
//  <li>Modifiers: A class can be public or has default access.</li>
//  <li>Class name: The name should begin with a initial letter (capitalized by convention).</li>
//  <li>Superclass(if any): The name of the class’s parent (superclass), if any, preceded by the keyword extends. A class can only extend (subclass) one parent.</li>
//  <li>Interfaces(if any): A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.</li>
//  <li>Body: The class body surrounded by braces, { }.</li>
//  </ul>

//  <h2>Object</h2>
//  <p>Object is a basic unit of Object Oriented Programming and represents the real life entities. A typical Java program creates many objects, which as you know, interact by invoking methods. An object consists of: </p>
//  <ul>
//   <li>State : It is represented by attributes of an object. It also reflects the properties of an object.</li>
//   <li>Behavior : It is represented by methods of an object. It also reflects the response of an object with other objects.</li>
//   <li>Identity : It gives a unique name to an object and enables one object to interact with other objects.</li>
//   <li>Method: A method is a collection of statements that perform some specific task and return result to the caller. A method can perform some specific task without returning anything. Methods allow us to reuse the code without retyping the code. In Java, every method must be part of some class which is different from languages like C, C++ and Python. 
// Methods are time savers and help us to reuse the code without retyping the code.</li>
//  </ul>



// <div className='player' controls>
//   <ReactPlayer url='https://www.youtube.com/watch?v=9pv3FpH2Wso&t=53s'/>
// </div>
 
 


// <h2>Pillar 1: Abstraction</h2>

// <p>Data Abstraction is the property by virtue of which only the essential details are displayed to the user.The trivial or the non-essentials units are not displayed to the user. Ex: A car is viewed as a car rather than its individual components.
// Data Abstraction may also be defined as the process of identifying only the required characteristics of an object ignoring the irrelevant details. The properties and behaviours of an object differentiate it from other objects of similar type
// and also help in classifying/grouping the objects.
// Consider a real-life example of a man driving a car. The man only knows that pressing the accelerators will increase the speed of car or applying brakes will stop the car but he does not know about how on pressing the accelerator the speed is 
// actually increasing, he does not know about the inner mechanism of the car or the implementation of accelerator, brakes etc in the car. This is what abstraction is. 
// In java, abstraction is achieved by interfaces and abstract classes. We can achieve 100% abstraction using interfaces.</p>
// <a href="https://www.javatpoint.com/abstract-class-in-java">Know More About Abstraction</a>

// <h2>Pillar 2: Encapsulation</h2>

// <p>It is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. Another way to think about encapsulation is, it is a protective shield that prevents the data from being 
// accessed by the code outside this shield.</p>
// <ul>
// <li>Technically in encapsulation, the variables or data of a class is hidden from any other class and can be accessed only through any member function of own class in which they are declared.</li>
// <li>As in encapsulation, the data in a class is hidden from other classes, so it is also known as data-hiding.</li>
// <li>Encapsulation can be achieved by Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables.</li>
// <a href="https://www.javatpoint.com/encapsulation">Know More About Encapsulation</a>
// </ul>
// <h2>Pillar 3: Inheritence</h2>

// <p>Inheritance is an important pillar of OOP(Object Oriented Programming). It is the mechanism in java by which one class is allow to inherit the features(fields and methods) of another class. 
// Let us discuss some of frequent used important terminologies:</p>
// <ul>
//   <li>Super Class: The class whose features are inherited is known as superclass(or a base class or a parent class).</li>
// <li>Sub Class: The class that inherits the other class is known as subclass(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods.</li>
// <li>Reusability: Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class.</li>
// </ul>

// <h2>Pillar 4: Polymorphism</h2>

// <p>It refers to the ability of OOPs programming languages to differentiate between entities with the same name efficiently. This is done by Java with the help of the signature and declaration of these entities.</p>
// <ul>
//   <li>Compile-time polymorphism</li>
//   <li>Run-time polymorphism</li>
// </ul>


//     </div>
//   )
// }

    
// export default OOPS