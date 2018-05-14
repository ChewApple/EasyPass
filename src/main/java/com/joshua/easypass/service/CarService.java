package com.joshua.easypass.service;

import com.joshua.easypass.entity.Car;
import com.joshua.easypass.repository.CarRepository;
import com.joshua.easypass.repository.CarinfoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CarService {
    public final static Logger logger = LoggerFactory.getLogger(CarService.class);
    @Autowired
    private CarRepository carRepo;
    @Autowired
    private CarinfoRepository carinfoRepo;

    public List<String> getBrand(){
        return carinfoRepo.getBrand();
    }

    public List<String> getSubBrand(String brand){
        return carinfoRepo.getSet(brand);
    }

    public Car[] getAllCars(){
        return carRepo.getAllCars();
    }

    public Car[] getCars(String carnum, String carbrand, String carset, Date firstdate1, Date firstdate2, String creator ){
        return carRepo.getCars(carnum,carbrand,carset,firstdate1,firstdate2,creator);
    }

    public void saveCar(Car car){
        carRepo.save(car);
    }

    public Car getCar(Integer carid){
        return carRepo.getCar(carid);
    }

}
