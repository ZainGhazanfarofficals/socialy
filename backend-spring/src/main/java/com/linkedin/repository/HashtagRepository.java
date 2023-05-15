package com.linkedin.repository;

import com.linkedin.model.HashTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HashtagRepository extends JpaRepository<HashTag,Integer> {
    public HashTag findByHashtag(String hashtag);
}
