package com.pgdac.elearning.Dto;

import javax.validation.constraints.NotEmpty;

public class EnrollmentDto {

	private int enrollmentid;

	@NotEmpty
	private int User_id;

	@NotEmpty
	private int courseid;

	public EnrollmentDto() {
		super();
	}

	public EnrollmentDto(int enrollmentid) {
		super();
		this.enrollmentid = enrollmentid;
	}

	public EnrollmentDto(int enrollmentid, @NotEmpty int user_id, @NotEmpty int courseid) {
		super();
		this.enrollmentid = enrollmentid;
		User_id = user_id;
		this.courseid = courseid;
	}

	public int getEnrollmentid() {
		return enrollmentid;
	}

	public void setEnrollmentid(int enrollmentid) {
		this.enrollmentid = enrollmentid;
	}

	public int getUser_id() {
		return User_id;
	}

	public void setUser_id(int user_id) {
		User_id = user_id;
	}

	public int getCourseid() {
		return courseid;
	}

	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}

	@Override
	public String toString() {
		return "EnrollmentDto [enrollmentid=" + enrollmentid + ", User_id=" + User_id + ", courseid=" + courseid + "]";
	}

}
