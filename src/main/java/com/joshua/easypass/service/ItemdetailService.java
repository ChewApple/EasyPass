package com.joshua.easypass.service;

import com.joshua.easypass.entity.Itemdetail;
import com.joshua.easypass.entity.Vendor;
import com.joshua.easypass.repository.ItemdetailRepository;
import com.joshua.easypass.repository.VendorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ItemdetailService {
    public final static Logger logger = LoggerFactory.getLogger(ItemdetailService.class);

    @Autowired
    private ItemdetailRepository idRepo;

    public Integer createItemdetail(Integer vdrid, String creator) {
        Itemdetail i = new Itemdetail();
        i.setCreatedate(new Date());
        i.setCreator(creator);
        i.setRelatedVendorId(vdrid);
        i = idRepo.saveAndFlush(i);
        return i.getPapid();
    }

    public Itemdetail getItemdetail(Integer papid){
        return idRepo.getItemdetail(papid);
    }
}