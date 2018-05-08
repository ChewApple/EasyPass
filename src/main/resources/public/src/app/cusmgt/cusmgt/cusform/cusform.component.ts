import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer, CustomerService} from "../../../service/customer.service";
import {ValidationService} from "../../../shared/services/validation.service";
import {mobileUniqueValidator, mobileValidator} from "../../../shared/validators/Validators";
import {Role} from "../../../service/role.service";

@Component({
  selector: 'app-cusform',
  templateUrl: './cusform.component.html',
  styleUrls: ['./cusform.component.css']
})
export class CusformComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();
  private formGroup: FormGroup;
  public cusid;
  public cus: Customer;

  constructor(private router: Router,
              private routeInfo: ActivatedRoute,
              private cusService: CustomerService,
              public validation: ValidationService,) {
  }

  ngOnInit() {
    this.cusid = this.routeInfo.snapshot.params['id'];
    this.formGroup = this.fb.group({
      cusname: ['', Validators.required],
      contact: ['', Validators.required],
      contactPhone: ['', [Validators.required, mobileValidator], mobileUniqueValidator],
      cusmode: ['', Validators.required],
      province: [''],
      city: [''],
      area: ['']
    });
    if (this.cusid != 0) {
      this.cusService.getCustomer(this.cusid).subscribe(
        data => {
          this.cus = data;
          let u = this.cus.address.split(' ');
          this.formGroup.reset({
            cusname: data.cusname,
            cusmode: data.cusmode,
            contact: data.contact,
            contactPhone: data.contactPhone,
            province: u[0],
            city: u[1],
            area: u[2]
          })
        }
      );
    }
  }

  // addContact() {
  //   let contacts = this.formGroup.get('contacts') as FormArray;
  //   contacts.push(new FormControl());
  // }

  cancel() {
    this.router.navigateByUrl('/home/cusmgt');
  }

  save() {
    if (this.formGroup.valid) {
      //新建
      if (this.cus == null) {
        this.cus = new Customer(
          null,
          this.formGroup.value['cusname'],
          this.formGroup.value['contact'],
          this.formGroup.value['contactPhone'],
          this.formGroup.value['cusmode'],
          this.formGroup.value['province'] + ' ' + this.formGroup.value['city'] + ' ' + this.formGroup.value['area'],
          '正常',
          null,
          JSON.parse(localStorage.getItem('currentUser'))['username'],
          null,
          null,
          null
        )
        this.cusService.addCus(this.cus).subscribe(
          res => {
            // 告诉岗位创建成功或者失败
            alert('客户创建成功： ' + this.cus.cusname);
            this.router.navigateByUrl('/home/cusmgt');
          },
          err => {
            alert('创建失败: ' + err.message)
            this.cus = null;
          }
        )
      } else {
        this.cus.cusname = this.formGroup.value['cusname'];
        this.cus.contact = this.formGroup.value['contact'];
        this.cus.contactPhone = this.formGroup.value['contactPhone'];
        this.cus.cusmode = this.formGroup.value['cusmode'];
        this.cus.address = this.formGroup.value['province'] + ' ' + this.formGroup.value['city'] + ' ' + this.formGroup.value['area'];
        console.log(this.cus);
        this.cusService.updateCustomer(this.cus).subscribe(
          res => {
            // 告诉岗位创建成功或者失败
            alert('客户更新成功： ' + this.cus.cusname);
            this.router.navigateByUrl('/home/cusmgt');
          },
          err => {
            alert('更新失败: ' + err.message)
            this.cus = null;
          }
        )
      }
    } else {
      this.validation.validateAllFormFields(this.formGroup);
    }
  }
}
