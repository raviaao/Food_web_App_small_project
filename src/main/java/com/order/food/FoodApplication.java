package com.order.food;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"com.order.entity"})
public class FoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodApplication.class, args);
		 
		System.out.println("I am ravi Tiwari");
	}

}
