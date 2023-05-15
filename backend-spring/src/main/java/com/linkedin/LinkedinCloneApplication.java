package com.linkedin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.linkedin.repository")
@ComponentScan(basePackages = {"com.linkedin"})
public class LinkedinCloneApplication {

	public static void main(String[] args) {

		SpringApplication.run(LinkedinCloneApplication.class, args);
	}

}
