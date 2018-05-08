import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AddrSelectService, Area, City, Province} from "../../shared/services/addr-select.service";
import {Observable} from "rxjs/Observable";
import {Vendor, VendorService} from "../../service/vendor.service";

@Component({
  selector: 'app-vdr-form',
  templateUrl: './vdr-form.component.html',
  styleUrls: ['./vdr-form.component.css']
})
export class VdrFormComponent implements OnInit {
  vdr: Observable<Vendor>;
  private fb: FormBuilder = new FormBuilder();
  public city: Observable<City[]>;
  public area: Observable<Area[]>;
  public province: Observable<Province[]>;
  // public platecode: string = '';
  // private checkboxShangpai:any;

  public formGroup: FormGroup = this.fb.group({
    vdrname: [''],
    vdraddr1: [''],
    vdraddr2: [''],
    vdraddr3: [''],
    vdraddrdetail: [''],
    vdrplate1: [''],
    vdrplate2: [''],
    checkboxShangpai: [''],
    checkboxWeizhang: [''],
    checkboxDiya: [''],
    checkboxJiechudiya: [''],
    checkboxWeituo: [''],
    checkboxNianjian: [''],
    checkboxHuanbu: [''],
    checkboxQita: [''],
    checkboxTidang: [''],
    checkboxGuohu: [''],
    contacts: this.fb.array([this.createContact()])
  });

  constructor(private routeInfo: ActivatedRoute,
              private vendorService: VendorService,
              private router: Router,
              private addrService: AddrSelectService) {
  }

  ngOnInit() {
    let id = this.routeInfo.snapshot.params['id'];
    this.vdr = this.vendorService.getVdr(id);
    // this.vdr = new Vdr(1, '车王', 13390988765, '上海浦东门店', [{id: 1, name: '办证', desc: '办理牌照证件', price: 9000}]);
    this.province = this.addrService.getPros();
  }

  cancel() {
    this.router.navigateByUrl('/home/vdrmgt');
  }

  save() {
    this.router.navigateByUrl('/home/vdrmgt');
  }

  addContact() {
    let contacts = this.formGroup.get('contacts') as FormArray;
    contacts.push(new FormControl);
  }

  removeContact(num: number) {
    let contacts = this.formGroup.get('contacts') as FormArray;
    contacts.removeAt(num);
  }

  test() {
    console.log(this.formGroup.get('checkboxShangpai'));
  }

  showCity(item) {
    let p = item.target.value;
    console.log(p);
    this.addrService.getProCode(p).subscribe(
      res => {
        this.formGroup.get('vdrplate1').setValue(res);
      }
    );
    this.city = this.addrService.getCities(p);
    // this.formGroup.get('vdraddr3').reset();
    this.area = this.addrService.getAreas('');
  }

  showArea(item) {
    let c = item.target.value;
    this.addrService.getShotCode(c).subscribe(
      res => {
        if (res == '' || res == null) {
          // this.formGroup.get('vdrplate2').enable();
        } else {
          // this.formGroup.get('vdrplate2').disable();
          this.formGroup.get('vdrplate2').setValue(res);
        }
      }
    );
    this.area = this.addrService.getAreas(c);
  }

  createContact(): FormGroup {
    return this.fb.group({
      contact: '',
      contactphone: ''
    });
  }
}

export class Contact {
  constructor(public name: string,
              public phone: number) {
  };
}
