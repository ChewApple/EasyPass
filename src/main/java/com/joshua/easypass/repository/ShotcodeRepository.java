package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Procode;
import com.joshua.easypass.entity.Shotcode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ShotcodeRepository extends JpaRepository<Shotcode, String> {
    @Query("SELECT s.shotcode FROM Shotcode s WHERE s.city = :city")
    public String getCode(@Param("city") String city);
}
