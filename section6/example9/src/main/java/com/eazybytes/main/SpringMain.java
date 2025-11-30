package com.eazybytes.main;

import com.eazybytes.beans.MyService;
import com.eazybytes.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    static void main() {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        MyService service1 = context.getBean(MyService.class);
        MyService service2 = context.getBean(MyService.class);

        System.out.println(service1 == service2); // Comparing hash code
    }
}
