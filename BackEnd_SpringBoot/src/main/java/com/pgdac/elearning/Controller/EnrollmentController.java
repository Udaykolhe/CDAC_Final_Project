package com.pgdac.elearning.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.EnrollmentDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.Entity.CourseChapterContent;
import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.services.EnrollmentService;

@CrossOrigin(origins = "*")
@RestController
public class EnrollmentController {

	@Autowired(required=true)
    private EnrollmentService enrollmentService;
	

    @PostMapping("/addEnrollment")
	public ResponseEntity<?> addNewEnrollment(@Valid @RequestBody Enrollment newEnrollment)
	{
		if(enrollmentService.addEnrollment(newEnrollment))	
			return Response.success("enrollment added...");
		return Response.error("enrollment not added");
	}

	   @GetMapping("/enrollment/All")
	   public ResponseEntity<?> showAllenrollment(){
	   	List<EnrollmentDto> result = new ArrayList<>();
	   	result = enrollmentService.findAllEnrollment();
	   	return Response.success(result);
	   }
	   @PostMapping("/Enrollment")
	   public ResponseEntity<?> addEnrollment(@RequestBody EnrollmentDto enrollmentdto){
	   	System.out.println("Inserted: "+enrollmentdto);
	   	Map<String,Object> result = enrollmentService.addEnrollment(enrollmentdto);
	   	return Response.success(result);
	   }
	   
	   @GetMapping("/courses/enrollment/{enrollmentid}")
	   public ResponseEntity<?> findCoursesByEnrollmentId(@PathVariable("enrollmentid") int id){
	   Object result = enrollmentService.findCourseByEnrollmentById(id);
	   	return Response.success(result);
	   }
	   
	   
	   
	   
	   
	   
	   
//    public ResponseEntity<?> showAllEnrollment(){
//    	List<ENroll> result = new ArrayList<>();
//    	result = coursesservice.findAllCourses();
//    	return Response.success(result);
//    }   
//    
    
    
	   @GetMapping("/enrollment/find/{id}")
	   public ResponseEntity<?> findenrollmentById(@PathVariable("id") int id){
	   Enrollment result = enrollmentService.findenrollmentById(id);
	   	return Response.success(result);
	   }
}
