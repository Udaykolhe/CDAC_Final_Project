package com.pgdac.elearning.Dto;

import org.springframework.stereotype.Component;

import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.Entity.CourseChapterContent;
@Component
public class CourseChapterContentDtoToEntity {
	public CourseChapterContentDto toChapterContentDto(CourseChapterContent entity)
    {
	  CourseChapterContentDto dto = new CourseChapterContentDto();
  	  dto.setContentid(entity.getContentid());
  	  dto.setTimeRequiredToCompleteTheCourse(entity.getTimeRequiredToCompleteTheCourse());
  	  dto.setChapterContent(entity.getChapterContent());
  	  dto.setCourseChapterid(entity.getCourseChapter().getCourseChapterid());
      dto.setContentLink(entity.getContentLink());
  	  return dto;
    }
    
    public CourseChapterContent toChapterContentEntity(CourseChapterContentDto dto)
    {
      CourseChapterContent entity = new CourseChapterContent();
  	  entity.setContentid(dto.getContentid());
  	  entity.setTimeRequiredToCompleteTheCourse(dto.getTimeRequiredToCompleteTheCourse());
  	  entity.setChapterContent(dto.getChapterContent());
  	  entity.setCourseChapter(new CourseChapter(dto.getCourseChapterid()));
  	  entity.setContentLink(dto.getContentLink());
  	  
  	  return entity;
    }

}
