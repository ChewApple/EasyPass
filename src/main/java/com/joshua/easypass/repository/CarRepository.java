package com.joshua.easypass.repository;

import com.joshua.easypass.entity.Car;
import com.joshua.easypass.entity.Carinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer> {
    @Query("SELECT c from Car c")
    public Car[] getAllCars();

    @Query("SELECT c from Car c WHERE c.carnum like %:carnum% AND c.carbrand like %:carbrand% AND c.carset like %:carset% AND c.firstdate > :firstdate1 AND c.firstdate < :firstdate2 AND c.creator = :creator")
    public Car[] getCars(@Param("carnum") String carnum, @Param("carbrand") String carbrand, @Param("carset") String carset, @Param("firstdate1") Date firstdate1, @Param("firstdate2") Date firstdate2, @Param("creator") String creator);

    @Query("SELECT c FROM Car c WHERE c.carid = :carid")
    public Car getCar(@Param("carid") Integer carid);

}
