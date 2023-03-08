package com.pgdac.elearning.Entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "User_id")
	private int id;

	@Size(max = 20, message = "name is not valid")
	@Column(name = "Fname", nullable = false)
	private String fName;
	
	@Size(max = 20, message = "name is not valid")
	@NotEmpty
	@Column(name = "Lname", nullable = false)
	private String lName;

	
	@Email
	@Column(name = "email", unique = true, nullable = false)
	private String email;

	@Column(name = "Password")
	private String password;

	@Temporal(TemporalType.DATE)
	private Date registrationDate = new Date();

	@Size(max = 10)
	@Column(name = "Qualification", nullable = false)
	private String qualification;

	@Size(max = 10)
	@Column(name = "num_Of_Published_Courses", nullable = false)
	private String publishedCourses;

	@Column(name = "avg_Rating")
	private int avgRting;

	@Size(max = 10, message = "Number is Not valid")
	@Column(name = "contact", unique = true, nullable = false)
	private String contact;

	@Size(max = 16)
	@Column(name = "adharNo")
	private String adharNo;

	@Size(max = 10)
	@Column(name = "role", nullable = false)
	private String role;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Courses> courseList;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Enrollment> enrollmentList;

	@Override
	public String toString() {
		return "User [id=" + id + ", fName=" + fName + ", lName=" + lName + ", email=" + email + ", password="
				+ password + ", registrationDate=" + registrationDate + ", qualification=" + qualification
				+ ", publishedCourses=" + publishedCourses + ", avgRting=" + avgRting + ", contact=" + contact
				+ ", adharNo=" + adharNo + ", role=" + role +  "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getPublishedCourses() {
		return publishedCourses;
	}

	public void setPublishedCourses(String publishedCourses) {
		this.publishedCourses = publishedCourses;
	}

	public int getAvgRting() {
		return avgRting;
	}

	public void setAvgRting(int avgRting) {
		this.avgRting = avgRting;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAdharNo() {
		return adharNo;
	}

	public void setAdharNo(String adharNo) {
		this.adharNo = adharNo;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	

	public User(int id, @Size(max = 20, message = "name is not valid") String fName,
			@Size(max = 20, message = "name is not valid") @NotEmpty String lName, @Email String email, String password,
			Date registrationDate, @Size(max = 10) String qualification, @Size(max = 10) String publishedCourses,
			int avgRting, @Size(max = 10, message = "Number is Not valid") String contact,
			@Size(max = 16) String adharNo, @Size(max = 10) String role) {
		super();
		this.id = id;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.registrationDate = registrationDate;
		this.qualification = qualification;
		this.publishedCourses = publishedCourses;
		this.avgRting = avgRting;
		this.contact = contact;
		this.adharNo = adharNo;
		this.role = role;

	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int id) {
		super();
		this.id = id;
	}

//	public void addCourses(Courses courses) {
//		this.courseList.add(courses);
//		courses.setUser(this);
//}

}
