import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Car, CarService} from "../../service/car.service";
import {carnumValidator, mobileValidator} from "../../shared/validators/Validators";
import {ValidationService} from "../../shared/services/validation.service";

declare var $: any;

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();
  public formGroup: FormGroup;
  carid: number;
  car: Car;
  brand: Observable<string>;
  set: Observable<string>;

  constructor(private router: Router,
              private carService: CarService,
              public validation: ValidationService,
              private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.brand = this.carService.getBrand();
    this.carid = this.routeInfo.snapshot.params['id'];
    this.formGroup = this.fb.group({
      carnum: ['', [Validators.required, carnumValidator]],
      carbrand: ['', Validators.required],
      carset: ['', Validators.required],
      firstdate: ['', Validators.required]
    });
    // $('#carform_dp').datepicker({
    //   autoclose: true,
    //   pickerPosition: 'bottom-right',
    //   language: 'zh-CN'
    // }, function(start, end, label){
    //   // localStorage.setItem('',  )
    // });
    // $('#carform_dp').datepicker();

    if (this.carid != 0) {
      this.carService.getCar(this.carid).subscribe(
        data => {
          this.car = data;
          this.set = this.carService.getSubBrand(data.carbrand);
          this.formGroup.reset({
            carnum: data.carnum,
            carbrand: data.carbrand,
            carset: data.carset,
            firstdate: data.firstdate
          })
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  cancel() {
    this.router.navigateByUrl('/carmgt');
  }

  save() {
    if (this.formGroup.valid) {
      if (this.car == null) {
        this.car = new Car(null,
          this.formGroup.value['carnum'],
          this.formGroup.value['carbrand'],
          this.formGroup.value['carset'],
          this.formGroup.value['firstdate'],
          new Date().toLocaleString(),
          JSON.parse(localStorage.getItem('currentUser'))['username'],
          null,
          null,
          null
        );
        console.log('新建车辆：');
        console.log(this.car);
        this.carService.saveCar(JSON.stringify(this.car)).subscribe(
          res => {
            // console.log(res);
            alert('车辆创建成功： '+this.car.carnum);
            this.router.navigateByUrl('/home/carmgt');
          },
          err => {
            console.log('错误信息：'+err.message);
            if(err.message.indexOf('carnum_UNIQUE')!= -1){
              alert('创建失败，车架号已存在');
              this.car = null;
            }
          }
        );
      } else{
        // update user
        this.car.carnum = this.formGroup.value['carnum'];
        this.car.carbrand = this.formGroup.value['carbrand'];
        this.car.carset = this.formGroup.value['carset'];
        this.car.firstdate = this.formGroup.value['firstdate'];
        console.log('更新车辆：');
        console.log(this.car.carnum);
        this.carService.saveCar(JSON.stringify(this.car)).subscribe(
          res => {
            console.log(res);
            alert('车辆更新成功： '+this.car.carnum);
            this.router.navigateByUrl('/home/carmgt');
          },
          err => {
            console.log(err);
            if(err.message.indexOf('carnum_UNIQUE')){
              alert('更新失败，车架号已存在');
              this.car = null;
            }
          }
        );
      }
    } else {
      this.validation.validateAllFormFields(this.formGroup);
    }
  }

  showSet(item: any) {
    let p = item.target.value;
    console.log(p);
    this.set = this.carService.getSubBrand(p);
  }
}
