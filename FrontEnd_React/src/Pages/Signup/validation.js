const validation = (values) => {
    
    let errors = {};

    if(!values.fName){
        errors.fName = "First Name is Required."
    }

    if(!values.lName){
        errors.lName = "Last Name is Required."
    }

    if(!values.contactNumber){
        errors.contactNumber = "Contact Number is Required."
    }

    if(!values.email){
        errors.email = "Email is Required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    }

    if(!values.password){
        errors.password = "Password is Required."
    }else if(values.password.length < 5){
        errors.password = "Password must be more then 5 charecters."
    }else if( (/^[A-Za-z]\w{5,15}$/).test(values.password)){
        errors.password = "Password Should be Special Characters"
    }

    if(!values.contact){
        errors.contact = "Mobile No. Number is Required."
    }else if(values.contact.length > 10 ){
        errors.contact = "Mobile No. Number must be 10 Digit."
    }else if(values.contact.length < 10){
        errors.contact ="Mobile No. Number must be 10 Digit."
    }

    
    if(!values.qualification){
        errors.qualification = "Qualification is Required."
    }

    
    
  return errors;
}
export default validation;