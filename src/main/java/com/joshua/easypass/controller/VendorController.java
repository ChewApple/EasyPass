package com.joshua.easypass.controller;

import com.joshua.easypass.entity.Authlist;
import com.joshua.easypass.entity.Vendor;
import com.joshua.easypass.service.AuthService;
import com.joshua.easypass.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class VendorController {
    @Autowired
    private VendorService vdrService;

    @PostMapping(value = "/createVdr")
    public Integer createVdr(@RequestParam("creator") String creator) {
        return vdrService.createVdr(creator);
    }

    @PostMapping(value="/getVdr")
    public Vendor getVdr(@RequestParam("vdrid") Integer vdrid){
        return vdrService.getVdr(vdrid);
    }
}
