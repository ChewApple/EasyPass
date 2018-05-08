package com.joshua.easypass.controller;

import com.joshua.easypass.entity.Role;
import com.joshua.easypass.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class RoleController {
    public final static Logger logger = LoggerFactory.getLogger(RoleController.class);
    @Autowired
    private RoleService roleService;

    @GetMapping(value = "/role/{id}")
    public Role getRole(@PathVariable("id") Integer id) {
        return roleService.getRole(id);
    }

    @PutMapping(value="/role")
    public void updateRole(@RequestParam("rolename") String rolename,
                           @RequestParam("authlist") String authlist,
                           @RequestParam("roleid") Integer roleid){
        roleService.updateRole(rolename, authlist, roleid);
    }

    @GetMapping(value = "/roles")
    public Role[] getUser() {
        return roleService.getRoles();
    }

    @PostMapping(value="/permission")
    public String findAuthlist(@RequestParam("rolename") String rolename){ return roleService.findAuthlist(rolename); }

    @PostMapping(value = "/addRole")
    public void addUser(@RequestParam("rolename") String rolename,
                        @RequestParam("authlist") String authlist,
                        @RequestParam("creator") String creator) {
        Date currentTime = new Date();
        Role role = new Role();
        role.setRolename(rolename);
        role.setAuthlist(authlist);
        role.setCreatedate(currentTime);
        role.setCreator(creator);
        logger.info("新建职位："+role.toString());
        roleService.addRole(role);
    }

}
