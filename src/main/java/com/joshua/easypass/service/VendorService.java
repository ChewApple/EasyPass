package com.joshua.easypass.service;

import com.joshua.easypass.entity.Authlist;
import com.joshua.easypass.entity.Vendor;
import com.joshua.easypass.repository.AuthlistRepository;
import com.joshua.easypass.repository.VendorRepository;
import com.joshua.easypass.util.DataUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class VendorService {
    public final static Logger logger = LoggerFactory.getLogger(VendorService.class);

    @Autowired
    private VendorRepository vdrRepo;

    public Integer createVdr(String creator) {
        Vendor v = new Vendor();
        v.setCreatedate(new Date());
        v.setCreator(creator);
        v = vdrRepo.saveAndFlush(v);
        return v.getVdrid();
    }

    public void saveVdr(Vendor v){
        vdrRepo.save(v);
    }

    public Vendor getVdr(Integer vdrid){
        return vdrRepo.getVdr(vdrid);
    }
}