package com.joshua.easypass.service;

import com.joshua.easypass.entity.Role;
import com.joshua.easypass.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class RoleService {
    public final static Logger logger = LoggerFactory.getLogger(RoleService.class);

    @Autowired
    private RoleRepository roleRepo;

    public Role[] getRoles() {
        return roleRepo.getRoles();
    }

    public Role getRole(Integer id) {
        return roleRepo.getRole(id);
    }

    @Transactional
    public void addRole(Role role) {
        roleRepo.save(role);
    }

    public String findAuthlist(String rolename) {
        return roleRepo.findAuthlist(rolename);
    }
    @Transactional
    public void updateRole(String rolename, String authlist, Integer roleid) {
        roleRepo.updateRole(rolename, authlist, roleid);
    }
}
