package com.pgdac.elearning.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.Entity.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {
	     
	
//	@Query(value = "select Concat(u.Fname  ,\" \", u.LName) as fullName,e.enrollmentid,f.Comment,f.commentDate  from feedback f inner join enrollment e on f.enrollmentid=e.enrollmentid inner join user u on u.User_id =e.User_id where enrollmentid=1 order by commentDate desc;", nativeQuery = true)
//	List<Object> findFeedbackListByEnrollmentidId(int enrollmentId);

	@Query(value = "select *from feedback where enrollmentid=?;", nativeQuery = true)
	List<Feedback> findByEnrollmentId(int enrollmentid);
	
	@Query(value = "select *from feedback where Feedbackid=?;", nativeQuery = true)
     Feedback  findByFeedbackid(int id);
	
	@Query(value = "select   *  from feedback ;", nativeQuery = true)
    List<Object>  findByAllFeedbackk();
	
	
}
