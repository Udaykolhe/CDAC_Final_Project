package com.pgdac.elearning.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pgdac.elearning.Entity.Courses;

public interface CoursesDao extends JpaRepository<Courses, Integer> {

	@Query(value = "select *from courses where courseid=?;", nativeQuery = true)
	public List<Courses> findAllCoursesByCoursesId(int courseid);
	
	@Query(value = "select NumofChapter from courses where courseid=?;", nativeQuery = true)
	public int findNumOfChapterByCoursesId(int coursesid);

	Courses findBycourseid(int id);
}
