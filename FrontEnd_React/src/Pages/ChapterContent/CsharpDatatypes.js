// import React from 'react'
// import ReactPlayer from 'react-player';
// import './index.css'
// import ContentNavi from '../../Components/Navbar/ContentNavi';

// const DataTypes = () => {
//   return (
//     <div className='Content'>
//         <ContentNavi/>
//         <h1>C# Data Types</h1>
//         <br/>   <br/>   
//         <p>Data types specify the type of data that a valid C# variable can hold. C# is a strongly typed programming language because in C#, each type of data (such as integer, character, float, and so forth) is predefined as part of the programming language and all constants or variables defined for a given program must be described with one of the data types.</p>

//         <h3>Data types in C# is mainly divided into three categories</h3>
// <ul>
//     <li>Value Data Types</li>
//     <li>Reference Data Types</li>
//     <li>Pointer Data Type</li>
    
// </ul>


// {/* <div className='player' controls>
//     <ReactPlayer url='https://www.youtube.com/watch?v=VToVLx8BXyk'/>
// </div> */}






// <h4>1)Value Data Types :</h4>


// <p>In C#, the Value Data Types will directly store the variable value in memory and it will also accept both signed and unsigned literals. The derived class for these data types are System.ValueType. Following are different Value Data Types in C# programming language :</p>
// <ul>
//     <li>Signed and Unsigned Integral Types :</li>
//     <ul>
//         <li>There are 8 integral types which provide support for 8-bit, 16-bit, 32-bit, and 64-bit values in signed or unsigned form.</li>
//     </ul>
// </ul> 
// <ul>
//     <li>Floating Point Types :There are 2 floating point data types which contain the decimal point.</li>
//     <ul>
//         <li>Float: It is 32-bit single-precision floating point type. It has 7 digit Precision. To initialize a float variable, use the suffix f or F. Like, float x = 3.5F;. If the suffix F or f will not use then it is treated as double.</li>
//         <li>Double:It is 64-bit double-precision floating point type. It has 14 – 15 digit Precision. To initialize a double variable, use the suffix d or D. But it is not mandatory to use suffix because by default floating data types are the double type.</li>
//     </ul>
// </ul> 
// <ul>
//     <li>Decimal Types :</li>
//     <ul>
//         <li>The decimal type is a 128-bit data type suitable for financial and monetary calculations. It has 28-29 digit Precision. To initialize a decimal variable, use the suffix m or M. Like as, decimal x = 300.5m;. If the suffix m or M will not use then it is treated as double.</li>
//     </ul>
// </ul>
// <ul>
//     <li>Character Types :</li>
//     <ul>
//         <li>The character types represents a UTF-16 code unit or represents the 16-bit Unicode character.</li>
//     </ul>
// </ul>
// <ul>
//     <li>Boolean Types :</li>
//     <ul>
//         <li>It has to be assigned either true or false value. Values of type bool are not converted implicitly or explicitly (with casts) to any other type. But the programmer can easily write conversion code.</li>
//     </ul>
// </ul>

// <h4>2)Reference Data Types :</h4>

// <p>The Reference Data Types will contain a memory address of variable value because the reference types won’t store the variable value directly in memory. The built-in reference types are string, object.</p>
// <ul>
//     <li>String :</li>
//     <ul>
//         <li>It represents a sequence of Unicode characters and its type name is System.String. So, string and String are equivalent.</li>
//     </ul>
// </ul> 

// <ul>
//     <li>Object :</li>
//     <ul>
//         <li>In C#, all types, predefined and user-defined, reference types and value types, inherit directly or indirectly from Object. So basically it is the base class for all the data types in C#. Before assigning values, it needs type conversion. When a variable of a value type is converted to object, it’s called boxing. When a variable of type object is converted to a value type, it’s called unboxing. Its type name is System.Object.</li>
//     </ul>
// </ul> 
// <h4>(3)Pointer Data Type :</h4>
// <p>The Pointer Data Types will contain a memory address of the variable value.
// To get the pointer details we have a two symbols ampersand (&) and asterisk (*).</p>
//         <ul>
//             <li>ampersand (&):</li>
//             <ul>
//                 <li>It is Known as Address Operator. It is used to determine the address of a variable.</li>
//             </ul>
//             <li>asterisk (*):</li>
//             <ul>
//                 <li>It also known as Indirection Operator. It is used to access the value of an address.</li>
//             </ul>
//         </ul>



//     </div>
//   )
// }

// export default DataTypes;