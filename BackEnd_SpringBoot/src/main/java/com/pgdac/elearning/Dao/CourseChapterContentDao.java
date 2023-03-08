package com.pgdac.elearning.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.pgdac.elearning.Entity.CourseChapterContent;
import com.pgdac.elearning.Entity.Courses;

public interface CourseChapterContentDao extends JpaRepository<CourseChapterContent,Integer> {
	@Query(value = "select * from coursechaptercontent where contentid =?", nativeQuery = true)
	public List<CourseChapterContent> findContentById(int contentId);

	@Query(value = "select * from coursechaptercontent where ChapterContent =?", nativeQuery = true)
	public CourseChapterContent findContentByContentName(String chapterContent);



	@Modifying
	@Query(value = "update coursechaptercontent p set p.timeRequiredToCompleteTheCourse=?2,p.ChapterContent=?3 where p.contentid=?1", nativeQuery = true)
	public void updateContent(int contentid, String timeRequiredToCompleteTheCourse, String ChapterContent 
			);
    
	CourseChapterContent findBycontentid(int id);
	
	@Query(value = "select * from coursechaptercontent where courseChapterid =?", nativeQuery = true)
	List<CourseChapterContent>  findCourseChapterById(int id);

}
