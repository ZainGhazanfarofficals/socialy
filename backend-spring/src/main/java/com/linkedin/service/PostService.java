package com.linkedin.service;

import com.linkedin.config.NewPostRequest;
import com.linkedin.model.HashTag;
import com.linkedin.model.Post;
import com.linkedin.model.User;
import com.linkedin.repository.HashtagRepository;
import com.linkedin.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    HashtagRepository hashtagRepository;

    public Post createNewPost(User user, NewPostRequest newPostRequest){
        Post post = new Post();
        post.setText(newPostRequest.getContent());
        post.setUser(user);
        post.setImage(newPostRequest.getImage());
        String hashtags = newPostRequest.getHashtags();
        // Split hashtags string into array of hashtags
        String[] hashtagArray = hashtags.split(",");
        // Loop through array of hashtags
        System.out.println(Arrays.toString(hashtagArray));
        for (String hashtagEl : hashtagArray) {
            // For every hashtag check if that hashtag already exist in db or not
            // If it exist then add that hashtag to post
            // If it doesn't exist then create a new hashtag and add that hashtag to post
            if(hashtagEl == null || hashtagEl.isEmpty()){
                continue;
            }
            HashTag hashTag = hashtagRepository.findByHashtag(hashtagEl);
            if (hashTag == null) {
                hashTag = new HashTag();
                hashTag.setHashtag(hashtagEl);
                hashTag = hashtagRepository.save(hashTag);   
            }   
            hashTag.addPost(post);
            post.addHashtag(hashTag);
        }
        post = postRepository.save(post);
        return post;
    }
}
