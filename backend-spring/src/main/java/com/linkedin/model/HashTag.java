package com.linkedin.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hashtags")
public class HashTag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    @GenericGenerator(name = "native",strategy = "native")
    private int id;

    @Column(name = "hashtag")
    private String hashtag;

    @ManyToMany(mappedBy = "hashtagSet")
    private Set<Post> postSet = new HashSet<>();

    public void addPost(Post post){
        this.postSet.add(post);
    }
}
