package com.pgdac.elearning.exception_handler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.pgdac.elearning.Dto.ErrorResponse;
import com.pgdac.elearning.cust_exception.CourseNotFoundException;
import com.pgdac.elearning.cust_exception.UserNotFoundException;


@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> userNotFoundExceptionHandler(UserNotFoundException e) {
		ErrorResponse resp = new ErrorResponse(e.getMessage(), LocalDateTime.now(), false);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);

	}
	
	@ExceptionHandler(CourseNotFoundException.class)
	public ResponseEntity<?> handlerCourseNotFoundException(CourseNotFoundException e) {
		ErrorResponse resp = new ErrorResponse(e.getMessage(), LocalDateTime.now(), false);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);

	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String,String>> handlerMethodArgumentNotValidException(MethodArgumentNotValidException mv){
		Map<String , String > resp = new HashMap<>();
		mv.getBindingResult().getAllErrors().forEach((error)->{
			String fieldError =((FieldError)error).getField();
		 String msg=  error.getDefaultMessage();
		   resp.put(fieldError, msg);
		});
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
		
	}
}
