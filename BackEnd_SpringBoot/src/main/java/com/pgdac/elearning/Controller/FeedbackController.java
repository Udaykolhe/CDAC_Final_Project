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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.Entity.Feedback;
import com.pgdac.elearning.services.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	
@Autowired
private FeedbackService feedbackservice;


@PostMapping("/addFeedback")
public ResponseEntity<?> addNewFeedback(@Valid @RequestBody Feedback newFeedback)
{
	if(feedbackservice.addFeedback(newFeedback))	
		return Response.success("Package added...");
	return Response.error("Package not added");
}



//
//
@GetMapping("/all")
public ResponseEntity<?> findAllFeedback(){
	List<Object> result = new ArrayList<>();
	result = feedbackservice.findAllFeedback();
	return Response.success(result);

	}
//
@GetMapping("/find/{Feedbackid}")
public ResponseEntity<?> findFeedbackById(@PathVariable("Feedbackid") int id){
	Feedback result = feedbackservice.findByFeedbackId(id);
	return Response.success(result);
}

}
