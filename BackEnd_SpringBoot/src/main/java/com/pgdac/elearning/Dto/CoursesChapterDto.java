package com.pgdac.elearning.Dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

//courseChapterid | int          | NO   | PRI | NULL    | auto_increment |
//| ChapterTitle    | varchar(200) | YES  |     | NULL    |                |
//| NumOfVideo      | int          | YES  |     | NULL    |                |
//| courseid
public class CoursesChapterDto {
	private int courseChapterid;
	
	@NotEmpty
	@Size(message = "Invalid tittle")
	private String chapterTitle;
	
	
	private int numOfVideo;
	
	private int courseid;
	
	
	public CoursesChapterDto(int courseChapterid, @NotEmpty @Size(message = "Invalid tittle") String chapterTitle,
			 int numOfVideo,  int courseid) {
		super();
		this.courseChapterid = courseChapterid;
		this.chapterTitle = chapterTitle;
		this.numOfVideo = numOfVideo;
		this.courseid = courseid;
	}
	public CoursesChapterDto() {
		super();
	}
	public int getCourseChapterid() {
		return courseChapterid;
	}
	public void setCourseChapterid(int courseChapterid) {
		this.courseChapterid = courseChapterid;
	}
	
	public String getChapterTitle() {
		return chapterTitle;
	}
	public void setChapterTitle(String chapterTitle) {
		this.chapterTitle = chapterTitle;
	}
	public int getNumOfVideo() {
		return numOfVideo;
	}
	public void setNumOfVideo(int numOfVideo) {
		this.numOfVideo = numOfVideo;
	}
	public int getCourseid() {
		return courseid;
	}
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	@Override
	public String toString() {
		return "CoursesChapterDto [courseChapterid=" + courseChapterid + ", chapterTitle=" + chapterTitle
				+ ", numOfVideo=" + numOfVideo + ", courseid=" + courseid + "]";
	}
	
	
	
	
	
}
