package com.eazybytes.main;

import com.eazybytes.beans.Engine;
import com.eazybytes.beans.Vehicle;
import com.eazybytes.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    static void main() {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Engine engine = context.getBean(Engine.class);
        Vehicle vehicle = context.getBean(Vehicle.class);

        System.out.println("Vehicle name from Spring Context: " + vehicle.getName());
        System.out.println("Engine name from Spring Context: " + engine.getName());
        System.out.println("Engine that Vehicle own is: "+ vehicle.getEngine());
    }
}
