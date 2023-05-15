package com.linkedin.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class PostCommentId implements Serializable {

    @Column(name = "user_id")
    private int userId;

    @Column(name = "post_id")
    private int postId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PostCommentId)) return false;
        PostCommentId that = (PostCommentId) o;
        return Objects.equals(getPostId(), that.getPostId()) &&
                Objects.equals(getUserId(), that.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPostId(), getUserId());
    }
}
