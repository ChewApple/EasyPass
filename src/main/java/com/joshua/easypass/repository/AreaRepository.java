package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AreaRepository extends JpaRepository<Area, Integer> {
    @Query("SELECT a FROM Area a, City c WHERE a.citycode = c.code AND c.name = :cname")
    public Area[] getAreas(@Param("cname") String cname);

}
