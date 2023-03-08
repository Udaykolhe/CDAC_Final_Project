package com.pgdac.elearning.Dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

public class Credentials {
	
	@Email
	private String email;
	private String password;
	public Credentials() {
	}
	
	public Credentials(@Email String email,  String password) {
		super();
		this.email = email;
		this.password = password;
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
	@Override
	public String toString() {
		return String.format("Credentials [email=%s, password=%s]", email, password);
	}
	
}
