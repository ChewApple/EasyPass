package com.joshua.easypass.service;

import com.joshua.easypass.entity.Authlist;
import com.joshua.easypass.repository.AuthlistRepository;
import com.joshua.easypass.util.DataUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthService {
    public final static Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private AuthlistRepository authRepo;

    public Authlist[] getAllAuth() {
        return authRepo.getAllAuth();
    }

    public List<String> getAuthNames(String authids){
        logger.info("权限id清单为："+authids);
        return authRepo.getAuthNames(DataUtil.strToList(authids));
    }
}
