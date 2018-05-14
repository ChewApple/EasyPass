package com.joshua.easypass.service;

import com.joshua.easypass.repository.UserRepository;
import com.joshua.easypass.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    public final static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepo;

    public User[] getUsers(String username, String phone, String role, String state) {
        logger.info("查询中：用户名为{},手机号码为{}, 岗位为{}, 状态为{}", username, phone, role, state);
        return userRepo.getUsers(username, phone, role, state);
    }

    public User[] getAllUsers(){return userRepo.getAllUsers();}

    public User getUser(Integer userid) {
        return userRepo.getUser(userid);
    }

    public User login(String username, String password) {
        logger.info("登录中，用户名为{}， 密码为{}", username, password);
        return userRepo.find(username, password);
    }
    @Transactional
    public void addUser(User user) {
        userRepo.save(user);
    }
}
