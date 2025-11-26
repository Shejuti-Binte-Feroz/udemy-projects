package com.eazybytes.beans;


import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;


public class Vehicle {

    public Vehicle() {
        System.out.println("Vehicle Bean Has Been Created");
    }

    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void sayHello(){
        System.out.println("Printing Hello From Component Vehicle Bean");
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "name='" + name + '\'' +
                '}';
    }
}
