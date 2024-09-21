package com.EasyAnTech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.EasyAnTech") // Replace with your package
public class QuotesDataBaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuotesDataBaseApplication.class, args);
	}

}
