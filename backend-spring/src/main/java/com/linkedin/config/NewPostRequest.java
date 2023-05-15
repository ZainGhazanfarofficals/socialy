package com.linkedin.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewPostRequest {
    public String content;
    public String hashtags;
    public String image;

    @Override
    public String toString() {
        return "NewPostRequest{" +
                "content='" + content + '\'' +
                ", hashtags='" + hashtags + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
