package com.linkedin.service;

import com.linkedin.config.LoginRequest;
import com.linkedin.model.User;
import com.linkedin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenService tokenService;


    public String signupUser(User user){
        User savedUser;
        try{
            savedUser = userRepository.save(user);
        } catch (Exception e){
            return null;
        }
        if(savedUser.getId()>0){
            System.out.println("Primary key is:"+savedUser.getId()+" "+user.getId());
            String token = tokenService.generateToken(savedUser);
            return token;
        }
        return null;
    }

    public String signinUser(LoginRequest loginRequest){
        User user;
        try{
           user = userRepository.findByEmail(loginRequest.getEmail());
        } catch (Exception e){
            return null;
        }
        if(!Objects.equals(user.getPassword(), loginRequest.getPassword())){
            return null;
        }
        return tokenService.generateToken(user);

    }
}
