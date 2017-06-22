package com.uday.controllers;

import com.uday.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/api")
public class UserController {

    @Value("${user.id}")
    private String id;

    @Value("${user.name}")
    private String name;

    /*@Bean
    @ConfigurationProperties(prefix = "user")
    private User user() {
        return new User();
    }*/

    @RequestMapping(value = "/user", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public User getProjects() {
        return new User(id, name);
    }
}
