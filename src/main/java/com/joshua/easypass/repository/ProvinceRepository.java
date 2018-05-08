package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProvinceRepository extends JpaRepository<Province, Integer> {
    @Query("SELECT p FROM Province p")
    public Province[] getPros();
}
