package com.pgdac.elearning.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgdac.elearning.Dao.CoursesChapterDao;
import com.pgdac.elearning.Dao.CoursesDao;
import com.pgdac.elearning.Dao.UserDao;
import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.CoursesChapterDtotoEntity;
import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Dto.CoursesDtottoEntity;
import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.User;
@Transactional
@Service
public class CourseChapterServices {
@Autowired

private CoursesChapterDao courseschapterdao;
@Autowired
private CoursesChapterDtotoEntity converter;	
@Autowired
private UserDao userdao;
@Autowired
private CoursesDao coursesdao;

public Map<String,Object> addChapter(CoursesChapterDto chapterDto,int courseId){
	Courses course = this.coursesdao.findBycourseid(courseId);
	CourseChapter chapter = converter.toCourseChapterEntity(chapterDto);
	chapter.setCourses(course);
	chapter = courseschapterdao.save(chapter);
	return Collections.singletonMap("insertedId", chapter.getCourseChapterid());
}
//-----------------------------------------------------------------------------------------------//

public CoursesChapterDto findChapterByChapterTitle(String chapterTitle) {
	Object chp = courseschapterdao.findPackageByChapterTitle(chapterTitle);
	if (chp != null)
		return converter.toCourseChapterDto((CourseChapter) chp);
	return null;
}


//-------------------------------------------------------------------------------------------------//

public List<CoursesChapterDto> findAllChapters(){
	List<CourseChapter> chapterList =courseschapterdao.findAll();
	return chapterList.stream()
			.map(CourseChapter -> converter.toCourseChapterDto(CourseChapter))
			.collect(Collectors.toList());
}

//public CoursesChapterDto findChapterById(int courseChapterid) {
//	CourseChapter chapter = courseschapterdao.findBycourseChapterid(courseChapterid);
//	return converter.toCourseChapterDto(chapter);
//}
//public Map<String,Object> editChapter(int id,CoursesChapterDto chapterDto){
//	if(courseschapterdao.existsById(id)) {
//		CoursesChapterDto chapter = findChapterById(id);
//		CourseChapter updateChapter = converter.toCourseChapterEntity(chapter);
//		updateChapter.setChapterTitle(chapterDto.getChapterTitle());
//		updateChapter.setNumOfVideo(chapterDto.getNumOfVideo());
//		updateChapter.setCourseChapterid(chapterDto.getCourseChapterid());
//		
//		updateChapter = courseschapterdao.save(updateChapter);
//		return Collections.singletonMap("changeRows", 1);
//	}
//	return Collections.singletonMap("changedRows", 0);
//}
//public Map<String,Object> deleteCourses(int id){
//	if(coursesdao.existsById(id)) {
//		Courses courses=coursesdao.findBycourseid(id);
//		coursesdao.delete(courses);
//		return Collections.singletonMap("affectedRow", 1);
//	}
//	return Collections.singletonMap("affectedRow", 0);
//}
@Transactional
public void updateChapter(int id, String ChapterTitle,  int NumOfVideo
		) {

	courseschapterdao.updateChapter(id,ChapterTitle,NumOfVideo);

}
public List<CoursesChapterDto> findChapterById(int id)
{
	List<CourseChapter> list =courseschapterdao.findCourseChapterById(id);
	return list.stream().map(r -> converter.toCourseChapterDto(r)).collect(Collectors.toList());

}
public List<CoursesChapterDto> findChapterByCourseId(int id)
{
	List<CourseChapter> list =courseschapterdao.findChapterByCourseId(id);
	return list.stream().map(r -> converter.toCourseChapterDto(r)).collect(Collectors.toList());

}






public Map<String,Object> deleteChapter(int id){
	if(courseschapterdao.existsById(id)) {
		CourseChapter chapter=courseschapterdao.findBycourseChapterid(id);
		courseschapterdao.delete(chapter);
		return Collections.singletonMap("affectedRow", 1);
	}
	return Collections.singletonMap("affectedRow", 0);
}

//public Map<String, Object> deleteUser(int userId) {
//	Optional<User> user = userDao.findById(userId);
//	 User finduser=user.orElse(null);
//	if(userDao.existsById(userId) && !(finduser.getRole().equals("admin"))) 
//	{
//		userDao.deleteById(userId);
//		return Collections.singletonMap("affectedRows", 1);
//	}
//	return Collections.singletonMap("affectedRows", 0);
//}
}
