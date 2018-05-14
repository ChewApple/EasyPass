package com.joshua.easypass.controller;

import com.joshua.easypass.entity.Car;
import com.joshua.easypass.service.CarService;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class CarController{
    public final static Logger logger = LoggerFactory.getLogger(CarController.class);
    @Autowired
    private CarService carService;

    @GetMapping(value="/car/{carid}")
    public Car getCar(@RequestParam("carid") Integer carid){
        return carService.getCar(carid);
    }

    @PostMapping(value="/cars")
    public Car[] getCars(@RequestParam("carnum") String carnum,
                         @RequestParam("carbrand") String carbrand,
                         @RequestParam("carset") String carset,
                         @RequestParam("firstdate1") String firstdate1,
                         @RequestParam("firstdate2") String firstdate2,
                         @RequestParam("creator") String creator) throws Exception{
        SimpleDateFormat sDateFormat=new SimpleDateFormat("yyyy-MM-dd"); //加上时间
        Date date1 = "".equals(firstdate1)? null: sDateFormat.parse(firstdate1);
        Date date2 = "".equals(firstdate1)? null: sDateFormat.parse(firstdate2);
        return carService.getCars(carnum,carbrand,carset,date1,date2,creator);
    }

    @PostMapping(value="/saveCar")
    public void saveCar(@RequestParam("car") String car){
        logger.info(car);
        JSONObject jasonV = JSONObject.fromObject(car);
        if(jasonV.get("createdate") == null){
            jasonV.put("createdate", new Date().toString());
            logger.info("hello");
        }
        logger.info(jasonV.get("createdate").toString());
        Car c = (Car) JSONObject.toBean(jasonV, Car.class);
        carService.saveCar(c);
    }

    @GetMapping(value="/brand")
    public List<String> getBrand(){
        return carService.getBrand();
    }

    @PostMapping(value="/subBrand")
    public List<String> getSubBrand(@RequestParam("brand") String brand){
        return carService.getSubBrand(brand);
    }

}
