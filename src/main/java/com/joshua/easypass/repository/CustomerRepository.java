package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query("SELECT c FROM Customer c")
    public Customer[] getAllCustomers();

    @Query("SELECT c FROM Customer c WHERE c.cusid = :cusid")
    public Customer getCustomer(@Param("cusid") Integer cusid);

    @Query("SELECT c FROM Customer c WHERE c.cusname like %:cusname% AND c.cusmode like %:cusmode% AND c.contact like %:contact% AND c.contactPhone like %:contactPhone%")
    public Customer[] getCustomers(@Param("cusname") String cusname, @Param("cusmode") String cusmode, @Param("contact") String contact, @Param("contactPhone") String contactPhone);
}
