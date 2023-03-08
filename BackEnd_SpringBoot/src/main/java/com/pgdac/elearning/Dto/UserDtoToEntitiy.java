package com.pgdac.elearning.Dto;

import org.springframework.stereotype.Component;

import com.pgdac.elearning.Entity.*;
@Component
public class UserDtoToEntitiy {
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setUser_id(entity.getId());
		dto.setfName(entity.getfName());
		dto.setlName(entity.getlName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setRegistrationDate(entity.getRegistrationDate());
		dto.setQualification(entity.getQualification());
		dto.setPublishedCourses(entity.getPublishedCourses());
		dto.setAvgRting(entity.getAvgRting());
		dto.setContact(entity.getContact());
		dto.setAdharNo(entity.getAdharNo());
		dto.setRole(entity.getRole());
		return dto;
	}

	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setId(dto.getUser_id());
		entity.setfName(dto.getfName());
		entity.setlName(dto.getlName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setRegistrationDate(dto.getRegistrationDate());
		entity.setQualification(dto.getQualification());
		entity.setPublishedCourses(dto.getPublishedCourses());
		entity.setContact(dto.getContact());
		entity.setAdharNo(dto.getAdharNo());
		entity.setRole(dto.getRole());
		return entity;		
	}
	
}
