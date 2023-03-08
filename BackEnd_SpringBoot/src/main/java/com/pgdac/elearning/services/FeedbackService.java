package com.pgdac.elearning.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.pgdac.elearning.Dao.FeedbackDao;
import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.CoursesDto;
import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.Entity.Feedback;
import com.pgdac.elearning.Entity.User;

@Transactional
@Service
public class FeedbackService {
	@Autowired
	private FeedbackDao feedbackdao;
	

	public boolean addFeedback(Feedback feedback) {
		if (feedbackdao.save(feedback)!=null)
			return true;
		return false;
	}
	
	
	
//
	public List<Object> findAllFeedback(){
		List<Object> feedbackList =feedbackdao.findByAllFeedbackk();
		return feedbackList;

	}
	
//	
	public Feedback findByFeedbackId(int feedbackid) {
		Feedback feedback = feedbackdao.findByFeedbackid(feedbackid);
		return feedback;
	}

}
