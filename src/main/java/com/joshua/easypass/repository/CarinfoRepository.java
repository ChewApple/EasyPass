package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Carinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarinfoRepository extends JpaRepository<Carinfo, Integer> {
    @Query("SELECT DISTINCT c.brand from Carinfo c")
    public List<String> getBrand();

    @Query("SELECT DISTINCT c.subbrand from Carinfo c WHERE c.brand = :brand")
    public List<String> getSet(@Param("brand") String brand);

}
