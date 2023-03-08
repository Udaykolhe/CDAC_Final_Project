package com.pgdac.elearning.cust_exception;

public class UserNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(String message)
	{
		super(message);
	}
}
