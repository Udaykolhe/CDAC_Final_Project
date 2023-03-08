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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "enrollment")
public class Enrollment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int enrollmentid;
	// @Column(name="enrollmentid")

//	@Column(name="User_id")
//	private int user_Id;

//	@Column(name="courseid")
//	private String courseId;

	@ManyToOne
	@JoinColumn(name = "User_id", insertable = false, updatable = false, nullable = false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "courseid", insertable = false, updatable = false, nullable = false)
	private Courses courses;

	@OneToMany(mappedBy = "enrollment", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Feedback> feedbackList;

	public Enrollment() {
		super();
	}

	public Enrollment(int enrollmentid) {
		super();
		this.enrollmentid = enrollmentid;
	}

	public Enrollment(int enrollmentid, User user, Courses courses) {
		super();
		this.enrollmentid = enrollmentid;
		this.user = user;
		this.courses = courses;
	}

	public int getEnrollmentid() {
		return enrollmentid;
	}

	public void setEnrollmentid(int enrollmentid) {
		this.enrollmentid = enrollmentid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Courses getCourses() {
		return courses;
	}

	public void setCourses(Courses courses) {
		this.courses = courses;
	}

	@Override
	public String toString() {
		return "Enrollment [enrollmentid=" + enrollmentid + ", user=" + user + ", courses=" + courses + "]";
	}

}