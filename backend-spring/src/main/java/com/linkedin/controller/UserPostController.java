package com.linkedin.controller;

import com.linkedin.config.NewPostRequest;
import com.linkedin.model.Post;
import com.linkedin.model.User;
import com.linkedin.service.PostService;
import com.linkedin.service.TokenService;
import org.apache.el.parser.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post")
public class UserPostController {

    @Autowired
    TokenService tokenService;
    @Autowired
    PostService postService;

    @GetMapping("/all")
    public String getAllPosts() {
        return "All Posts";
    }
    
     @PostMapping("/create")
     public String addPost(RequestEntity<NewPostRequest> newPostRequestResponseEntity,
                           @RequestHeader("Authorization") String token) {

        NewPostRequest newPostRequest = newPostRequestResponseEntity.getBody();
        User user = tokenService.extractUserDetails(token);
        // If user is null then return error
        if (user == null) {
            return "Error";
        }
        Post post = postService.createNewPost(user, newPostRequest);
        return post.toString();
     }
}
