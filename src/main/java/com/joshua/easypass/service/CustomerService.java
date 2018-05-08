package com.joshua.easypass.service;

import com.joshua.easypass.entity.Customer;
import com.joshua.easypass.repository.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CustomerService {
    public final static Logger logger = LoggerFactory.getLogger(CustomerService.class);
    @Autowired
    private CustomerRepository cusRepo;

    public Customer[] getAllCustomers() {
        return cusRepo.getAllCustomers();
    }

    public Customer getCustomer(Integer cusid){
        return cusRepo.getCustomer(cusid);
    }

    public Customer[] getCustomers(String cusname, String cusmode, String contact, String contactPhone) {
        logger.info("查询中：客户名为{},客户模式为{}, 联系人为{}, 联系人电话为{}", cusname, cusmode, contact, contactPhone);
        return cusRepo.getCustomers(cusname, cusmode, contact, contactPhone);
    }

    @Transactional
    public void addCus(Customer cus) {
        cusRepo.save(cus);
    }
}
