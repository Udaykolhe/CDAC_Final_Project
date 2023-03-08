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

import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.services.CourseChapterServices;

@CrossOrigin(origins = "*")
@RestController
public class CoursesChapterController {
	
	@Autowired
	private CourseChapterServices chapterServices;
	
	
	
	
	
	@PostMapping("/{courseId}/chapter")
	public ResponseEntity<?> addChapter(@Valid @RequestBody CoursesChapterDto chapterDto,@PathVariable int courseId){
		System.out.println("Inserted: "+chapterDto);
		Map<String,Object> result = chapterServices.addChapter(chapterDto,courseId);
		return Response.success(result);
	}
	
	@GetMapping("/chapter/details/{ChapterTitle}")
	public ResponseEntity<?> findchapterById(@Valid @PathVariable("ChapterTitle") String chapterTitle)
	{
		CoursesChapterDto chapterdto = chapterServices.findChapterByChapterTitle(chapterTitle);
		if(chapterdto==null)
			return Response.error("Package not Found");
		return Response.success(chapterdto);
		
	}	
	
	
	
	@GetMapping("/chapter/all")
	public ResponseEntity<?> showAllChapter(){
		List<CoursesChapterDto> result = new ArrayList<>();
		result = chapterServices.findAllChapters();
		return Response.success(result);
	}
//	@PutMapping("/chapter/{courseChapterid}")
//	public ResponseEntity<?> editchapter(@PathVariable("courseChapterid") int id,@RequestBody CoursesChapterDto chapterDto){
//		Map<String,Object> result = chapterServices.editChapter(id,chapterDto);
//		return Response.success(result);
//	}
//}
@PutMapping("/updateChapter/{courseChapterid}")
public void updateChapter(@Valid @PathVariable("courseChapterid") int courseChapterid, @RequestBody CourseChapter updPackage) 
{
	chapterServices.updateChapter(courseChapterid,updPackage.getChapterTitle(), updPackage.getNumOfVideo());

}


@GetMapping("/allChapters/{courseChapterid}")
public ResponseEntity<?> findchapterByName(@Valid @PathVariable("courseChapterid")int id )
{
	List<CoursesChapterDto> result = chapterServices.findChapterById(id);
	return Response.success(result);
}
@DeleteMapping("/chapter/delete/{courseChapterid}")
public ResponseEntity<?> deleteCourses(@Valid @PathVariable("courseChapterid") int id){
	Map<String,Object> result = chapterServices.deleteChapter(id);
	return Response.success(result);
}
//@DeleteMapping("/parking/delete/{parkId}")
//public ResponseEntity<?> deleteParking(@PathVariable("parkId") int id) {
//	Map<String, Object> result = parkingService.deleteParking(id);
//	return Response.success(result);
//}
@GetMapping("/allChapterss/{courseid}")
public ResponseEntity<?> findchapterByCourseId(@Valid @PathVariable("courseid")int id )
{
	List<CoursesChapterDto> result = chapterServices.findChapterByCourseId(id);
	return Response.success(result);
}
}