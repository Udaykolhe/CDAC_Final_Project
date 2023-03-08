package com.pgdac.elearning.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.Enrollment;

public interface EnrollmentDao extends JpaRepository<Enrollment, Integer>{
	
	@Query(value = "select *from enrollment where enrollmentid=?;", nativeQuery = true)     
	Enrollment findbyId(int enrollmentid);
	Enrollment findByenrollmentid(int id);
	@Query(value = "select *from enrollment ;", nativeQuery = true)     
	List<Enrollment> findAllEnrollmnet();
	@Query(value = "select e.enrollmentid ,u.courseid,u.CourseTitle,u.CourseBrief,u.NumofChapter  from enrollment e inner join courses u on u.courseid=e.courseid where enrollmentid=?;", nativeQuery = true)  
	Object findCourseEnrollmentID(int enrollmentid);
	
	//@Query(value = "select Concat(u.Fname  ,\" \", u.LName) as fullName,e.enrollmentid,f.Comment,f.commentDate  from feedback f inner join enrollment e on f.enrollmentid=e.enrollmentid inner join user u on u.User_id =e.User_id where enrollmentid=1 order by commentDate desc;", nativeQuery = true)
	
	
	
}
