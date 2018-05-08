package com.joshua.easypass.controller;

import com.joshua.easypass.service.UserService;
import com.joshua.easypass.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

    public final static Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;

    @PostMapping(value = "/login")
    public User Login(@RequestParam("username") String username,
                      @RequestParam("password") String password) {
        return userService.login(username, password);
    }

    @PostMapping(value = "/addUser")
    public void addUser(@RequestParam("username") String username,
                        @RequestParam("phone") String phone,
                        @RequestParam("password") String password,
                        @RequestParam("rolename") String rolename,
                        @RequestParam("gender") String gender,
                        @RequestParam("state") String state,
                        @RequestParam("creator") String creator) {
        Date currentTime = new Date();
        User user = new User();
        user.setUsername(username);
        user.setPhone(phone);
        user.setPassword(password);
        user.setRolename(rolename);
        user.setGender(gender);
        user.setState(state);
        user.setCreatedate(currentTime);
        user.setCreator(creator);
        logger.info("新建用户："+user.toString());
        userService.addUser(user);
    }

    @PostMapping(value = "/users")
    public User[] getUsers(@RequestParam("username") String username,
                           @RequestParam("phone") String phone,
                           @RequestParam("role") String role,
                           @RequestParam("state") String state) {
        return userService.getUsers(username, phone, role, ("所有".equals(state)?"":state));
    }

    @PutMapping(value = "/user")
    public void updateUser(@RequestParam("userid") String userid,
                             @RequestParam("username") String username,
                             @RequestParam("phone") String phone,
                             @RequestParam("password") String password,
                             @RequestParam("rolename") String rolename,
                             @RequestParam("gender") String gender,
                             @RequestParam("state") String state,
                             @RequestParam("createdate") String createdate,
                             @RequestParam("creator") String creator) {
        Date currentTime = new Date();
        User user = new User();
        user.setUserid(Integer.parseInt(userid));
        user.setUsername(username);
        user.setPhone(phone);
        user.setPassword(password);
        user.setRolename(rolename);
        user.setGender(gender);
        user.setState(state);
        user.setCreatedate(currentTime);
        user.setCreator(creator);
        logger.info("更新用户："+user.toString());
        userService.addUser(user);
    }

    @GetMapping(value = "/user/{id}")
    public User getUser(@PathVariable("id") Integer id) {
        return userService.getUser(id);
    }

//    @PostMapping(value="/user")
//    public void addUser(@Valid User user, BindingResult bingdingResult){
//
//    }
}
