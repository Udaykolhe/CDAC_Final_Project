package com.pgdac.elearning.Dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class CoursesDto {
	private int courseid;
	
	@NotEmpty
	@Size(max = 20, message = "Invalid CourseTitle")
	private String courseTitle;

	@NotEmpty
	@Size(max = 100)
	private String courseBrief;

	
	@NotNull
	private int numOfChapter;

	@NotNull
	private int User_id;
	
	
	
	
	public CoursesDto() {
		super();
	}

	public CoursesDto(int courseid, @NotEmpty @Size(max = 20, message = "Invalid CourseTitle") String courseTitle,
			@NotEmpty @Size(max = 100) String courseBrief, @NotNull int numOfChapter,
			@NotNull int user_id) {
		super();
		this.courseid = courseid;
		this.courseTitle = courseTitle;
		this.courseBrief = courseBrief;
		this.numOfChapter = numOfChapter;
		User_id = user_id;
	}
	
	public int getCourseid() {
		return courseid;
	}

	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}

	public String getCourseTitle() {
		return courseTitle;
	}

	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}

	public String getCourseBrief() {
		return courseBrief;
	}

	public void setCourseBrief(String courseBrief) {
		this.courseBrief = courseBrief;
	}

	public int getNumOfChapter() {
		return numOfChapter;
	}

	public void setNumOfChapter(int numOfChapter) {
		this.numOfChapter = numOfChapter;
	}

	public int getUser_id() {
		return User_id;
	}

	public void setUser_id(int user_id) {
		User_id = user_id;
	}

	@Override
	public String toString() {
		return "CoursesDto [courseid=" + courseid + ", courseTitle=" + courseTitle + ", courseBrief=" + courseBrief
				+ ", numOfChapter=" + numOfChapter + ", User_id=" + User_id + "]";
	}

	
	
	
	
	
	
	
}
