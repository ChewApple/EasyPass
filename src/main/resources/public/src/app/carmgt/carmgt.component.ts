import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {Car, CarService} from "../service/car.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User, UserServiceService} from "../service/user-service.service";
import {DateService} from "../shared/services/date.service";
declare var $: any;

@Component({
  selector: 'app-carmgt',
  templateUrl: './carmgt.component.html',
  styleUrls: ['./carmgt.component.css']
})
export class CarmgtComponent implements OnInit {

  carbrand: Observable<string[]>;
  carset: Observable<string[]>;
  users: Observable<User[]>;
  cars: Observable<Car[]>;
  public formGroup: FormGroup;

  constructor(private router: Router,
              private carService: CarService,
              private fb: FormBuilder,
              private userService: UserServiceService,
              public dService: DateService) {
  }

  ngOnInit() {
    this.carbrand = this.carService.getBrand();
    this.users = this.userService.getAllUsers();
    this.formGroup = this.fb.group({
      carnum: [''],
      carbrand: [''],
      carset: [''],
      firstdate:[''],
      creator:['']
    });
    $('#carmgt_form_dp').daterangepicker({
      'locale': {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: '应用',
        cancelLabel: '取消',
        resetLabel: '重置',
      }
    }, function(start, end, label){
      localStorage.setItem('carSearchDate',start.format('YYYY-MM-DD')+','+end.format('YYYY-MM-DD'))  ;
      // console.log(timeRangeChange);
    });
  }

  search(){
    this.formGroup.get('firstdate').setValue(localStorage.getItem('carSearchDate'))  ;
    console.log('date is: '+this.formGroup.get('firstdate').value);
    this.cars = this.carService.getCars(this.formGroup);
  }

  create() {
    this.router.navigateByUrl('/home/carform/0');
  }

  showSet(item:any){
    let p = item.target.value;
    console.log(p);
    this.carset = this.carService.getSubBrand(p);
  }

  edit(id:any){}

  createOrder(id:any){}
}
