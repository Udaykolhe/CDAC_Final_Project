package com.pgdac.elearning.Entity;
//courseid     | int          | NO   | PRI | NULL    | auto_increment |

//| CourseTitle  | varchar(200) | YES  |     | NULL    |                |
//| CourseBrief  | varchar(500) | YES  |     | NULL    |                |
//| NumofChapter | int          | YES  |     | NULL    |                |
//| User_id      | int

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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "courses")
public class Courses {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseid;

	@Size(max = 20, message = "Invalid CourseTitle")
	@Column(name = "CourseTitle", unique = true, nullable = false)
	private String courseTitle;

	@Size(max = 100)
	@Column(name = "CourseBrief", nullable = false)
	private String courseBrief;

	@Column(name = "NumofChapter", nullable = false)
	private int numOfChapter;

	@ManyToOne
	@JoinColumn(name = "User_id", nullable = false)
	private User user;

	@OneToMany(mappedBy = "courses", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<CourseChapter> courseChapterList;

	@OneToMany(mappedBy = "courses", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Enrollment> enrollmentList;

	public Courses(int courseid) {
		super();
		this.courseid = courseid;
	}

	public Courses(User user) {
		super();
		this.user = user;
	}
	
	

	public List<CourseChapter> getCourseChapterList() {
		return courseChapterList;
	}

	public void setCourseChapterList(List<CourseChapter> courseChapterList) {
		this.courseChapterList = courseChapterList;
	}

	public List<Enrollment> getEnrollmentList() {
		return enrollmentList;
	}

	public void setEnrollmentList(List<Enrollment> enrollmentList) {
		this.enrollmentList = enrollmentList;
	}

	public Courses(int courseid, @Size(max = 20, message = "Invalid CourseTitle") String courseTitle,
			@Size(max = 100) String courseBrief, int numOfChapter, User user) {
		super();
		this.courseid = courseid;
		this.courseTitle = courseTitle;
		this.courseBrief = courseBrief;
		this.numOfChapter = numOfChapter;
		this.user = user;
	}

	public Courses(@Size(max = 20, message = "Invalid CourseTitle") String courseTitle,
			@Size(max = 100) String courseBrief, int numOfChapter) {
		super();
		this.courseTitle = courseTitle;
		this.courseBrief = courseBrief;
		this.numOfChapter = numOfChapter;
	}

	public Courses() {
		super();
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	

	@Override
	public String toString() {
		return "Courses [courseid=" + courseid + ", courseTitle=" + courseTitle + ", courseBrief=" + courseBrief
				+ ", numOfChapter=" + numOfChapter + ", user=" + user + "]";
	}

}