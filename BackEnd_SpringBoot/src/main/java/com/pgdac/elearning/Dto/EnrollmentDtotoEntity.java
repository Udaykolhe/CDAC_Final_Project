package com.pgdac.elearning.Dto;

import org.springframework.stereotype.Component;

import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.Enrollment;
import com.pgdac.elearning.Entity.User;

@Component
public class EnrollmentDtotoEntity {
	
	public EnrollmentDto toEnrollmentDto(Enrollment entity) {
		EnrollmentDto dto = new EnrollmentDto();
		   
		   dto.setEnrollmentid(entity.getEnrollmentid());
		   dto.setUser_id(entity.getUser().getId());
			dto.setCourseid(entity.getCourses().getCourseid());
		
			//dto.setUser_id(entity.getUser().getId());
			return dto;
	  }
	
public Enrollment toEnrollmentEntity(EnrollmentDto dto) {
	Enrollment entity = new Enrollment();
	  entity.setEnrollmentid(dto.getEnrollmentid());
	   entity.setUser(new User(dto.getUser_id()));
		entity.setCourses(new Courses(dto.getCourseid()));
		//coursechapter.setCourses(new Courses(dto.getCourseid()));
	
	return entity;		
}
}