const validation = (values) => {
    
    let errors = {};

    if(!values.courseTitle){
        errors.courseTitle = "Course Name is Required."
    }

    if(!values.courseBrief){
        errors.courseBrief = "Brief Introduction is Required."
    }

    if(!values.numOfChapter){
        errors.numOfChapter = "Chapter Count is Required."
    }

    if(!values.user_id){
        errors.user_id = "User Id  is Required."
    }
    
  return errors;
}
export default validation;