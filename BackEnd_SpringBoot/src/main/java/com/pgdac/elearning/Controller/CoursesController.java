package com.pgdac.elearning.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.services.CoursesService;

@CrossOrigin(origins = "*")
@RestController
public class CoursesController {
	@Autowired
	private CoursesService coursesservice;

	@PostMapping("/{id}/courses")
	public ResponseEntity<?> addCourses(@Valid @RequestBody CoursesDto coursesdto , @PathVariable int id) {
		System.out.println("Inserted: " + coursesdto);
		Map<String, Object> result = coursesservice.addCourses(coursesdto,id);
		return Response.success(result);
	}

	@GetMapping("/courses/all")
	public ResponseEntity<?> showAllCourses() {
		List<CoursesDto> result = new ArrayList<>();
		result = coursesservice.findAllCourses();
		return Response.success(result);
	}

	@GetMapping("/courses/find/{id}")
	public ResponseEntity<?> findCourseById(@Valid @PathVariable("id") int id) {
		CoursesDto result = coursesservice.findCoursesById(id);
		return Response.success(result);
	}

	@PutMapping("courses/{id}")
	public ResponseEntity<?> editCourse(@Valid @PathVariable("id") int id, @RequestBody CoursesDto coursesDto) {
		Map<String, Object> result = coursesservice.editCourses(id, coursesDto);
		return Response.success(result);
	}

	@DeleteMapping("courses/delete/{id}")
	public ResponseEntity<?> deleteCourses(@Valid @PathVariable("id") int id) {
		Map<String, Object> result = coursesservice.deleteCourses(id);
		return Response.success(result);
	}
//@GetMapping("/courses/find/{id}")
//public ResponseEntity<?> findCourseById(@PathVariable("id") int id){
//	CoursesDto result = coursesservice.findCoursesById(id);
//	return Response.success(result);
//}

}
