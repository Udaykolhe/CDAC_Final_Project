package com.pgdac.elearning.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
//courseChapterid | int          | NO   | PRI | NULL    | auto_increment |
//| ChapterTitle    | varchar(200) | YES  |     | NULL    |                |
//| NumOfVideo      | int          | YES  |     | NULL    |                |
//| courseid
@Entity
@Table(name="coursechapter")
public class CourseChapter {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseChapterid;
	
	@Size(max=50)
	@Column(name="ChapterTitle",unique = true,nullable = false)
	private String chapterTitle;
	
	
	@Column(name="NumOfVideo",nullable = false)
	private int numOfVideo;
	
	  @ManyToOne
	  @JoinColumn(name="courseid",nullable = false)
	  private Courses courses;

	  @OneToMany(mappedBy= "courseChapter",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	  private List<CourseChapterContent> courseChapterContentList;
	  
	    
	public CourseChapter(int courseChapterid) {
		super();
		this.courseChapterid = courseChapterid;
	}

	public CourseChapter(int courseChapterid, String chapterTitle, int numOfVideo, Courses courses) {
		super();
		this.courseChapterid = courseChapterid;
		this.chapterTitle = chapterTitle;
		this.numOfVideo = numOfVideo;
		this.courses = courses;
	}

	public CourseChapter() {
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

	public Courses getCourses() {
		return courses;
	}

	public void setCourses(Courses courses) {
		this.courses = courses;
	}

	@Override
	public String toString() {
		return "CourseChapter [courseChapterid=" + courseChapterid + ", chapterTitle=" + chapterTitle + ", numOfVideo="
				+ numOfVideo + ", courses=" + courses + "]";
	}
	
}
