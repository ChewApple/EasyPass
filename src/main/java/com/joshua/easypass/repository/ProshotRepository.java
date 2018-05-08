package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Procode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProshotRepository extends JpaRepository<Procode, Integer> {
    @Query("SELECT p.code FROM Procode p WHERE p.province = :province")
    public String getCode(@Param("province") String province);
}
