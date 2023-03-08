package com.pgdac.elearning.services;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgdac.elearning.Dao.UserDao;
import com.pgdac.elearning.Dto.UserDtoToEntitiys;
import com.pgdac.elearning.Entity.User;

@Transactional
@Service
public class AdminServices {
@Autowired
private UserDao userdao;
@Autowired
private UserDtoToEntitiys userdtos;

//-----------------------UserFunctionailty---------------------------------------------------------------//

//public Map<String, Object> deleteUser(int id) {
//	Optional<User> user = Optional.ofNullable(userdao.findById(id));
//	 User finduser=user.orElse(null);
//	if(userdao.existsById(id) && !(finduser.getRole().equals("admin"))) 
//	{
//		userdao.deleteById(id);
//		return Collections.singletonMap("affectedRows", 1);
//	}
//	return Collections.singletonMap("affectedRows", 0);
//}

}
