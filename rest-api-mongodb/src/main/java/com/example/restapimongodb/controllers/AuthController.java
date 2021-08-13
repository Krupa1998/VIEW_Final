package com.example.restapimongodb.controllers;

import com.example.restapimongodb.CustomizedResponse;
import com.example.restapimongodb.models.UserModel;
import com.example.restapimongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "https://view-store.herokuapp.com/")
@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    private CustomizedResponse response;

    @Autowired
    private UserService userService;


    @PostMapping(value = "/auth", consumes = {

            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity login(@RequestBody UserModel user) {

        CustomizedResponse response = null;

        try {

            //create authentication object token from username and password enter and pass it to authentication provider.
            //AP will call the loadUserByUsername and check valid username and password and according load the data.
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

            response = new CustomizedResponse("Login Successful", userService.getAUserByEmail(user.getEmail()));

        } catch (BadCredentialsException e) {

            response = new CustomizedResponse("Invalid Username and/or Password", null);
            return new ResponseEntity(response, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity(response, HttpStatus.OK);
    }

}
