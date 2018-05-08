package com.joshua.easypass.repository;

import com.joshua.easypass.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CityRepository extends JpaRepository<City, Integer> {
    @Query("SELECT c FROM City c, Province p WHERE c.provincecode = p.code AND p.name = :pname")
    public City[] getCities(@Param("pname") String pname);

}
