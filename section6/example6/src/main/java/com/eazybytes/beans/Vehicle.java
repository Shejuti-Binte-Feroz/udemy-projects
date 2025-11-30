package com.eazybytes.beans;


import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {

//    public Vehicle() {
//        System.out.println("Vehicle Bean Has Been Created");
//    }

    private String name;

    private final Engine engine;

    @Autowired
    public Vehicle(Engine engine) {
        this.engine = engine;
        System.out.println("Vehicle Bean Has Been Created");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Engine getEngine() {
        return engine;
    }

//    @Autowired
//    public void setEngine(Engine engine) {
//        this.engine = engine;
//    }

    public void sayHello(){
        System.out.println("Printing Hello From Component Engine Bean");
    }

    @Override
    public String toString() {
        return "Engine{" +
                "name='" + name + '\'' +
                '}';
    }

    @PostConstruct
    public void initialize() {
        this.name = "Kiah";
    }
}
