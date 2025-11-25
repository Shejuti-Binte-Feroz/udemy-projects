package com.eazybytes.main;

import com.eazybytes.beans.Vehicle;
import com.eazybytes.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    static void main() {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);
        Vehicle vehicle = context.getBean(Vehicle.class);
        System.out.println("Vehicle: " + vehicle.getName());

        String hello = context.getBean(String.class);
        System.out.println("String: " + hello);

        Integer intg = context.getBean(Integer.class);
        System.out.println("Integer: " + intg);
    }
}
