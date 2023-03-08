package com.pgdac.elearning.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.pgdac.elearning.Dto.Response;
import com.pgdac.elearning.services.AdminServices;

@RestController
public class AdminController {
	@Autowired
	private AdminServices adminservice;
	
	
//	@DeleteMapping("/user/delete/{id}")
//	public ResponseEntity<?> deleteUser(@PathVariable("id") int id) {
//		Map<String, Object> result = adminservice.deleteUser(id);
//		return Response.success(result);
//	}
}
