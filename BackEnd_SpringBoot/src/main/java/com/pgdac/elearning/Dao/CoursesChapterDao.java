package com.pgdac.elearning.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.Entity.Courses;

@Repository
public interface CoursesChapterDao extends JpaRepository<CourseChapter, Integer> {
	

	@Modifying
	@Query(value = "update coursechapter p set p.ChapterTitle=?2,p.NumOfVideo=?3 where p.courseChapterid=?1", nativeQuery = true)
	public void updateChapter(int courseChapterid, String ChapterTitle,int  NumOfVideo 
			);
    
	@Query(value = "select * from coursechapter where courseChapterid =?", nativeQuery = true)
	public List<CourseChapter> findCourseChapterById(int packageId);
	
	@Query(value = "select * from coursechapter where ChapterTitle =?", nativeQuery = true)
	public CourseChapter findPackageByChapterTitle(String chapterTitle);
	
	//@Query(value = "DELETE FROM coursechapter WHERE courseChapterid = ?", nativeQuery = true)
	public CourseChapter findBycourseChapterid(int id);
	
	
	@Query(value = "select * from coursechapter where courseid=?", nativeQuery = true)
	public List<CourseChapter> findChapterByCourseId(int id);
	
}
