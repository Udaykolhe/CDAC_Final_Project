package com.pgdac.elearning.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgdac.elearning.Dao.CourseChapterContentDao;
import com.pgdac.elearning.Dto.CourseChapterContentDto;
import com.pgdac.elearning.Dto.CourseChapterContentDtoToEntity;
import com.pgdac.elearning.Dto.CoursesChapterDto;
import com.pgdac.elearning.Dto.CoursesChapterDtotoEntity;
import com.pgdac.elearning.Entity.CourseChapter;
import com.pgdac.elearning.Entity.CourseChapterContent;
import com.pgdac.elearning.Entity.Courses;

@Transactional
@Service
public class CourseChapterContentServices {
	@Autowired
    private CourseChapterContentDao contentDao; 
	
	@Autowired
	private CourseChapterContentDtoToEntity converter;
//	@Autowired
//	private CoursesChapterDtotoEntity converter;
//    @Autowired
//    private CourseChapterContent content;
	public boolean addContent(CourseChapterContent content) {
		if (contentDao.save(content)!=null)
			return true;
		return false;
	}

	public void updateContent(int contentid, String timeRequiredToCompleteTheCourse, String ChapterContent ) {

		contentDao.updateContent(contentid,timeRequiredToCompleteTheCourse,ChapterContent);
	}
	
	public List<CourseChapterContentDto> findContentById(int contentid)
	{
		List<CourseChapterContent> list =contentDao.findContentById(contentid);
		return list.stream().map(r -> converter.toChapterContentDto(r)).collect(Collectors.toList());

	}
	public CourseChapterContentDto findContentByContentName(String chapterContent)
	{
		Object cont =contentDao.findContentByContentName(chapterContent);
		if (cont != null)
			return converter.toChapterContentDto((CourseChapterContent) cont);
		return null;

	}
	public List<CourseChapterContentDto> findAllContent(){
		List<CourseChapterContent> contentList =contentDao.findAll();
		return contentList.stream()
				.map(CourseChapterContent -> converter.toChapterContentDto(CourseChapterContent))
				.collect(Collectors.toList());
	}
	public Map<String,Object> deleteContent(int id){
		if(contentDao.existsById(id)) {
			CourseChapterContent content=contentDao.findBycontentid(id);
			contentDao.delete(content);
			return Collections.singletonMap("affectedRow", 1);
		}
		return Collections.singletonMap("affectedRow", 0);
	}
	
	
	public List<CourseChapterContentDto> findChapterById(int chapterid)
	{
		List<CourseChapterContent> list =contentDao.findCourseChapterById(chapterid);
		return list.stream().map(r -> converter.toChapterContentDto(r)).collect(Collectors.toList());

	}
}
