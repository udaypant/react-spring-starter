package com.uday;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableConfigurationProperties
@ComponentScan
public class AddonApplication {

    public static void main(String[] args) throws Exception {
        new SpringApplication(AddonApplication.class).run(args);
    }
}
