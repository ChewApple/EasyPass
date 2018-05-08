package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {
    @Query("SELECT v FROM Vendor v WHERE v.vdrid = :vdrid")
    public Vendor getVdr(@Param("vdrid") Integer vdrid);

}
