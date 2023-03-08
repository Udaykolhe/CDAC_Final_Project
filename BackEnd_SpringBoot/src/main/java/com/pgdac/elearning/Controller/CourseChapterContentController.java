package com.pgdac.elearning.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.CourseChapterContentDto;
import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.Entity.CourseChapterContent;
import com.pgdac.elearning.services.CourseChapterContentServices;

@CrossOrigin(origins = "*")
@RestController
public class CourseChapterContentController {
    @Autowired
	private CourseChapterContentServices contentservices;
    
    
    
    
    @PostMapping("/addContent")
	public ResponseEntity<?> addNewPackage(@Valid @RequestBody CourseChapterContent newContent)
	{
		if(contentservices.addContent(newContent))	
			return Response.success("Package added...");
		return Response.error("Package not added");
	}
    
    @PutMapping("/updateContent/{contentid}")
	public void updatePackage(@Valid @PathVariable("contentid") int contentid, @RequestBody CourseChapterContent updPackage) 
	{
    	contentservices.updateContent(contentid,updPackage.getTimeRequiredToCompleteTheCourse(), updPackage.getChapterContent()
				);

	}
	
    @GetMapping("/content/all")
	public ResponseEntity<?> showAllChapterContent(){
		List<CourseChapterContentDto> result = new ArrayList<>();
		result = contentservices.findAllContent();
		return Response.success(result);
	}
    
    
    

	@GetMapping("/allContent/{contentid}")
	public ResponseEntity<?> findPackageByContentId(@Valid @PathVariable("contentid")int id )
	{
		List<CourseChapterContentDto> result =contentservices.findContentById(id);
		return Response.success(result);
	}
	@GetMapping("/allContents/{courseChapterid}")
	public ResponseEntity<?> findPackageByCourseChapterid(@PathVariable("courseChapterid")int id )
	{
		List<CourseChapterContentDto> result =contentservices.findChapterById(id);
		return Response.success(result);
	}
	
	
	
    
	@GetMapping("/Content/details/{ChapterContent}")
	public ResponseEntity<?> findPackageByChapterContentName(@Valid @PathVariable("ChapterContent")String name )
	{

		CourseChapterContentDto contentdto = contentservices.findContentByContentName(name);
		if(contentdto==null)
			return Response.error("Content not Found");
		return Response.success(contentdto);
	}
	@DeleteMapping("/content/delete/{id}")
	public ResponseEntity<?> deleteCourses(@Valid @PathVariable("id") int id){
		Map<String,Object> result = contentservices.deleteContent(id);
		return Response.success(result);
	}

	
	
	
}
