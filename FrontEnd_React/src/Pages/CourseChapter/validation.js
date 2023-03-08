const validation = (values) => {
    
    let errors = {};

    if(!values.chapterTitle){
        errors.chapterTitle = "Chapter Name is Required."
    }

    if(!values.numOfVideo){
        errors.numOfVideo = "No. Of video is Required."
    }

    if(!values.courseid){
        errors.courseid = "Id is Required."
    }

   
    
  return errors;
}
export default validation;