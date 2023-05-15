package com.linkedin.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    @GenericGenerator(name="native",strategy = "native")
    private int id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "username",nullable = false,unique = true)
    private String username;

    @Column(name = "email",nullable = false,unique = true)
    private String email;

    @Column(name = "password",nullable = false)
    private String password;

    @Column(name = "phone",nullable = false)
    private String phone;

    @Column(name = "description",nullable = true,columnDefinition = "TEXT")
    private String description;

    @Column(name = "profile_img",nullable = true)
    private String profileImg = "uploads/defaultProfile.png";

    @Column(name = "cover_img",nullable = true)
    private String coverImg = "uploads/defaultCover.png";

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", description='" + description + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", coverImg='" + coverImg + '\'' +
                '}';
    }
}
