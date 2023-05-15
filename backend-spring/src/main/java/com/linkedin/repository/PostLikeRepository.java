package com.linkedin.repository;

import com.linkedin.model.PostLike;
import com.linkedin.model.PostLikeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostLikeRepository  extends JpaRepository<PostLike, PostLikeId> {
}
