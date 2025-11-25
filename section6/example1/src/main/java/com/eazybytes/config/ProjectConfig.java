package com.eazybytes.config;

import com.eazybytes.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//Whenever you are trying to open my application, please check this java configuration
//This java config tells how a bean should be created, which class should be created etc.
//If this annotation is written, it will be a normal class and we cannot expect the spring to scan all thousands of beans to find the configurations

/*
Spring @Configuration annotation is part of the spring core framework.
Spring configuration annotation indicates that the class has @Bean definition methods.
So spring container can process the class and generate Spring Beans to be used in the application.
*/


@Configuration
public class ProjectConfig {

    @Bean
    Vehicle vehicle(){
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Tesla");
        return vehicle;
    }

    @Bean
    String hello(){
        return "Hello World";
    }

    @Bean
    Integer number(){
        return 16;
    }
}
