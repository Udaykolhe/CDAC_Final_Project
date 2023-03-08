package com.pgdac.elearning.Entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Component;

//@Component
@Entity
@Table(name = "feedback")
public class Feedback {

//	 Feedbackid   | int  
//	 | enrollmentid | int  
//	 | ratinScore    | int

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name="Feedbackid")
	private int Feedbackid;

	@Column(name = "ratinScore")
	private int ratinScore;
	@Column(name = "Comment")
	private String comment;

	@ManyToOne
	@JoinColumn(name = "enrollmentid")
	private Enrollment enrollment;

	public Feedback() {
		super();
	}

	public Feedback(int feedbackid, Enrollment enrollment, int ratinScore, String comment) {
		super();
		Feedbackid = feedbackid;
		this.enrollment = enrollment;
		this.ratinScore = ratinScore;
		this.comment = comment;
	}

	public int getFeedbackid() {
		return Feedbackid;
	}

	public void setFeedbackid(int feedbackid) {
		Feedbackid = feedbackid;
	}

	public Enrollment getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(Enrollment enrollment) {
		this.enrollment = enrollment;
	}

	public int getRatinScore() {
		return ratinScore;
	}

	public void setRatinScore(int ratinScore) {
		this.ratinScore = ratinScore;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Feedback [Feedbackid=" + Feedbackid + ", enrollment=" + enrollment + ", ratinScore=" + ratinScore
				+ ", comment=" + comment + "]";
	}

}
