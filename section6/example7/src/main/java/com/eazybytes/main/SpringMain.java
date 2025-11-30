package com.eazybytes.main;

import com.eazybytes.beans.Coffee;
import com.eazybytes.beans.CoffeeShop;
import com.eazybytes.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {
    static void main() {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        CoffeeShop shop = context.getBean(CoffeeShop.class);
//        Coffee coffee = context.getBean(Coffee.class);

        System.out.println("Coffee From Spring Context: " + shop.getCoffee().makeCoffee());
    }
}
