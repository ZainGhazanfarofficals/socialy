package com.linkedin.repository;

import com.linkedin.model.PostComment;
import com.linkedin.model.PostCommentId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, PostCommentId> {
}
