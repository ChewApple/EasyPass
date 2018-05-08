package com.joshua.easypass.controller;

import com.joshua.easypass.entity.Authlist;
import com.joshua.easypass.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AuthController {
    @Autowired
    private AuthService authService;

    @GetMapping(value = "/authlist")
    public Authlist[] getAllCustomers() {
        return authService.getAllAuth();
    }

    @PostMapping(value="/authname")
    public List<String> getAuthNames(@RequestParam("authids") String authids){
        return authService.getAuthNames(authids);
    }
}
