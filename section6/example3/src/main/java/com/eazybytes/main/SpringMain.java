package com.eazybytes.main;

import com.eazybytes.beans.Vehicle;
import com.eazybytes.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    static void main() {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle audiVehicle = context.getBean("audiVehicle",Vehicle.class);
        System.out.println("Vehicle: " + audiVehicle.getName());

        Vehicle hondaVehicle = context.getBean("hondaVehicle",Vehicle.class);
        System.out.println("Vehicle: " + hondaVehicle.getName());

        Vehicle teslaVehicle = context.getBean("teslaVehicle",Vehicle.class);
        System.out.println("Vehicle: " + teslaVehicle.getName());

        Vehicle vehicle = context.getBean(Vehicle.class);
        System.out.println("Vehicle: " + vehicle.getName());
    }
}
