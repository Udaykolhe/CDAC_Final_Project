const validation = (values) => {
    
    let errors = {};

    if(!values.senderName){
        errors.senderName = "Name is Required."
    }

    if(!values.ratingScore){
        errors.ratingScore = "field is Required."
    }

    if(!values.email){
        errors.email = "Email is Required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    }
    if(!values.Comments){
        errors.Comments = "Field  is Required."
    }
    
  return errors;
}
export default validation;