const validation = (values) => {
    
    let errors = {};

    if(!values.timeRequiredToCompleteTheCourse){
        errors.timeRequiredToCompleteTheCourse = "Field is Required."
    }

    if(!values.chapterContent){
        errors.chapterContent = "Field is Required."
    }

    if(!values.courseChapterid){
        errors.courseChapterid = "Field is Required."
    }

    if(!values.contentLink){
        errors.contentLink = "Field is Required."
    }




   
    
  return errors;
}
export default validation;