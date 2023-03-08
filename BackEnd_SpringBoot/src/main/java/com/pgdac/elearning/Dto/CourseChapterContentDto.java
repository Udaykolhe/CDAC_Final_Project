package com.pgdac.elearning.Dto;

import javax.validation.constraints.NotEmpty;

public class CourseChapterContentDto {
	private int contentid;
	
	@NotEmpty
	private String timeRequiredToCompleteTheCourse;
	
	@NotEmpty
	private String chapterContent;
	
	
	private int courseChapterid;
	
	
	private String contentLink;
	
	
	public CourseChapterContentDto() {
		super();
	}
    

	public CourseChapterContentDto(int courseChapterid) {
		super();
		this.courseChapterid = courseChapterid;
	}


	


	public CourseChapterContentDto(int contentid, @NotEmpty String timeRequiredToCompleteTheCourse,
			@NotEmpty String chapterContent,  int courseChapterid,  String contentLink) {
		super();
		this.contentid = contentid;
		this.timeRequiredToCompleteTheCourse = timeRequiredToCompleteTheCourse;
		this.chapterContent = chapterContent;
		this.courseChapterid = courseChapterid;
		this.contentLink = contentLink;
	}



	public CourseChapterContentDto(@NotEmpty String timeRequiredToCompleteTheCourse, @NotEmpty String chapterContent,
			 int courseChapterid,  String contentLink) {
		super();
		this.timeRequiredToCompleteTheCourse = timeRequiredToCompleteTheCourse;
		this.chapterContent = chapterContent;
		this.courseChapterid = courseChapterid;
		this.contentLink = contentLink;
	}


	


	public int getContentid() {
		return contentid;
	}


	public void setContentid(int contentid) {
		this.contentid = contentid;
	}


	public String getTimeRequiredToCompleteTheCourse() {
		return timeRequiredToCompleteTheCourse;
	}


	public void setTimeRequiredToCompleteTheCourse(String timeRequiredToCompleteTheCourse) {
		this.timeRequiredToCompleteTheCourse = timeRequiredToCompleteTheCourse;
	}


	public String getChapterContent() {
		return chapterContent;
	}


	public void setChapterContent(String chapterContent) {
		this.chapterContent = chapterContent;
	}


	public int getCourseChapterid() {
		return courseChapterid;
	}


	public void setCourseChapterid(int courseChapterid) {
		this.courseChapterid = courseChapterid;
	}


	public String getContentLink() {
		return contentLink;
	}


	public void setContentLink(String contentLink) {
		this.contentLink = contentLink;
	}


	@Override
	public String toString() {
		return "CourseChapterContentDto [contentid=" + contentid + ", timeRequiredToCompleteTheCourse="
				+ timeRequiredToCompleteTheCourse + ", chapterContent=" + chapterContent + ", courseChapterid="
				+ courseChapterid + ", contentLink=" + contentLink + "]";
	}




	
	
}
