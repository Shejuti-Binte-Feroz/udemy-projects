package com.eazybytes.config;

import com.eazybytes.beans.Person;
import com.eazybytes.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class ProjectConfig {
    @Bean
    Vehicle vehicle(){
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Toyota");
        return vehicle;
    }

//    @Bean
//    Person person(){
//        Person person = new Person();
//        person.setName("Shejuti");
//        person.setVehicle(vehicle()); //Using Method invocation
//        return person;
//    }

    @Bean
    Person person(Vehicle vehicle){
        Person person = new Person();
        person.setName("Shejuti");
        person.setVehicle(vehicle); //Using method parameter
        return person;
    }
}
