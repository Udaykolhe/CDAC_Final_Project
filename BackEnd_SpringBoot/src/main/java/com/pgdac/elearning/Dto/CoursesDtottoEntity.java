package com.pgdac.elearning.Dto;

import org.springframework.stereotype.Component;

import com.pgdac.elearning.Entity.Courses;
import com.pgdac.elearning.Entity.User;


@Component
public class CoursesDtottoEntity {
	public CoursesDto toCoursesDto(Courses entity) {
		CoursesDto dto = new CoursesDto();
		   dto.setCourseid(entity.getCourseid());
		   dto.setCourseTitle(entity.getCourseTitle());
			dto.setCourseBrief(entity.getCourseBrief());
			dto.setNumOfChapter(entity.getNumOfChapter());
			dto.setUser_id(entity.getUser().getId());
			return dto;
	  }
	
	  public Courses toCoursesEntity(CoursesDto coursesDto) {
		  Courses entity = new Courses();
			
		  entity.setCourseid(coursesDto.getCourseid());
		  entity.setCourseTitle(coursesDto.getCourseTitle());
		  entity.setCourseBrief(coursesDto.getCourseBrief());
		  entity.setNumOfChapter(coursesDto.getNumOfChapter());
		  entity.setUser(new User(coursesDto.getUser_id()));
		return entity;
					
		}
	
}
