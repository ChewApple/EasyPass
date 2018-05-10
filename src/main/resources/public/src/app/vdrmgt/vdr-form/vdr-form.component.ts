import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AddrSelectService, Area, City, Province} from "../../shared/services/addr-select.service";
import {Observable} from "rxjs/Observable";
import {Vendor, VendorService} from "../../service/vendor.service";
import {ItemdetailService} from "../../service/itemdetail.service";

@Component({
  selector: 'app-vdr-form',
  templateUrl: './vdr-form.component.html',
  styleUrls: ['./vdr-form.component.css']
})
export class VdrFormComponent implements OnInit {
  vdr: Vendor;
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
    checkboxBuhuan: [''],
    checkboxQita: [''],
    checkboxTidang: [''],
    checkboxGuohu: [''],
    itemTidangTax: [''],
    itemTidangCost: [''],
    itemTidangCompletedate: [''],
    itemTidangDesc: [''],
    itemTidangReqId: [''],
    itemGuohuTax: [''],
    itemGuohuCost: [''],
    itemGuohuCompletedate: [''],
    itemGuohuDesc: [''],
    itemGuohuReqId: [''],
    itemShangpaiTax: [''],
    itemShangpaiCost: [''],
    itemShangpaiCompletedate: [''],
    itemShangpaiDesc: [''],
    itemShangpaiReqId: [''],
    itemWeizhangTax: [''],
    itemWeizhangCost: [''],
    itemWeizhangCompletedate: [''],
    itemWeizhangDesc: [''],
    itemWeizhangReqId: [''],
    itemDiyaCost: [''],
    itemDiyaCompletedate: [''],
    itemDiyaDesc: [''],
    itemDiyaReqId: [''],
    itemJiechudiyaCost: [''],
    itemJiechudiyaCompletedate: [''],
    itemJiechudiyaDesc: [''],
    itemJiechudiyaReqId: [''],
    itemWeituoTax: [''],
    itemWeituoCost: [''],
    itemWeituoCompletedate: [''],
    itemWeituoDesc: [''],
    itemWeituoReqId: [''],
    itemNianjianTax: [''],
    itemNianjianCost: [''],
    itemNianjianCompletedate: [''],
    itemNianjianDesc: [''],
    itemNianjianReqId: [''],
    itemBuhuanTax: [''],
    itemBuhuanCost: [''],
    itemBuhuanCompletedate: [''],
    itemBuhuanDesc: [''],
    itemBuhuanReqId: [''],
    itemQitaCost: [''],
    itemQitaCompletedate: [''],
    itemQitaDesc: [''],
    contacts: this.fb.array([this.createContact()])
  });

  constructor(private routeInfo: ActivatedRoute,
              private vendorService: VendorService,
              private router: Router,
              private addrService: AddrSelectService,
              private idService: ItemdetailService) {
  }

  ngOnInit() {
    // this.vdr = new Vendor();
    let id = this.routeInfo.snapshot.params['id'];
    this.vendorService.getVdr(id).subscribe(
      res => {
        this.vdr = res;
      }
    );
    // this.vdr = new Vdr(1, '车王', 13390988765, '上海浦东门店', [{id: 1, name: '办证', desc: '办理牌照证件', price: 9000}]);
    this.province = this.addrService.getPros();
  }

  cancel() {
    this.router.navigateByUrl('/home/vdrmgt');
  }

  save() {
    // this.router.navigateByUrl('/home/vdrmgt');
    if (this.formGroup.valid) {
      // this.vdr.vdrid= this.formGroup.get('').value;
      this.vdr.vdrname = this.formGroup.get('vdrname').value;
      this.vdr.vdraddr = this.formGroup.get('vdraddr1').value + ' ' + this.formGroup.get('vdraddr2').value + ' ' + this.formGroup.get('vdraddr3').value;
      this.vdr.vdraddrdetail = this.formGroup.get('vdraddrdetail').value;
      this.vdr.vdrplate = this.formGroup.get('vdrplate1').value + this.formGroup.get('vdrplate2');
      // this.vdr.contact = this.formGroup.get('contact').value;
      // this.vdr.contactphone = this.formGroup.get('contactphone').value;
      // this.vdr.contacts = '';
      this.vdr.itemTidang = this.formGroup.get('checkboxTidang').value;
      this.vdr.itemTidangTax = this.formGroup.get('itemTidangTax').value;
      this.vdr.itemTidangCost = this.formGroup.get('itemTidangCost').value;
      this.vdr.itemTidangCompletedate = this.formGroup.get('itemTidangCompletedate').value;
      this.vdr.itemTidangDesc = this.formGroup.get('itemTidangDesc').value;
      // this.vdr.itemTidangReqId = this.formGroup.get('').value;
      this.vdr.itemGuohu = this.formGroup.get('checkboxGuohu').value;
      this.vdr.itemGuohuTax = this.formGroup.get('itemGuohuTax').value;
      this.vdr.itemGuohuCost = this.formGroup.get('itemGuohuCost').value;
      this.vdr.itemGuohuCompletedate = this.formGroup.get('itemGuohuCompletedate').value;
      this.vdr.itemGuohuDesc = this.formGroup.get('itemGuohuDesc').value;
      // this.vdr.itemGuohuReqId = this.formGroup.get('').value;
      this.vdr.itemShangpai = this.formGroup.get('checkboxShangpai').value;
      this.vdr.itemShangpaiTax = this.formGroup.get('itemShangpaiTax').value;
      this.vdr.itemShangpaiCost = this.formGroup.get('itemShangpaiCost').value;
      this.vdr.itemShangpaiCompletedate = this.formGroup.get('itemShangpaiCompletedate').value;
      this.vdr.itemShangpaiDesc = this.formGroup.get('itemShangpaiDesc').value;
      // this.vdr.itemShangpaiReqId = this.formGroup.get('').value;
      this.vdr.itemWeizhang = this.formGroup.get('checkboxWeizhang').value;
      this.vdr.itemWeizhangTax = this.formGroup.get('itemWeizhangTax').value;
      this.vdr.itemWeizhangCost = this.formGroup.get('itemWeizhangCost').value;
      this.vdr.itemWeizhangCompletedate = this.formGroup.get('itemWeizhangCompletedate').value;
      this.vdr.itemWeizhangDesc = this.formGroup.get('itemWeizhangDesc').value;
      // this.vdr.itemWeizhangReqId = this.formGroup.get('').value;
      this.vdr.itemDiya = this.formGroup.get('checkboxDiya').value;
      this.vdr.itemDiyaCost = this.formGroup.get('itemDiyaCost').value;
      this.vdr.itemDiyaCompletedate = this.formGroup.get('itemDiyaCompletedate').value;
      this.vdr.itemDiyaDesc = this.formGroup.get('itemDiyaDesc').value;
      // this.vdr.itemDiyaReqId = this.formGroup.get('').value;
      this.vdr.itemJiechudiya = this.formGroup.get('checkboxJiechudiya').value;
      this.vdr.itemJiechudiyaCost = this.formGroup.get('itemJiechudiyaCost').value;
      this.vdr.itemJiechudiyaCompletedate = this.formGroup.get('itemJiechudiyaCompletedate').value;
      this.vdr.itemJiechudiyaDesc = this.formGroup.get('itemJiechudiyaDesc').value;
      // this.vdr.itemJiechudiyaReqId = this.formGroup.get('').value;
      this.vdr.itemWeituo = this.formGroup.get('checkboxWeituo').value;
      this.vdr.itemWeituoTax = this.formGroup.get('itemWeituoTax').value;
      this.vdr.itemWeituoCost = this.formGroup.get('itemWeituoCost').value;
      this.vdr.itemWeituoCompletedate = this.formGroup.get('itemWeituoCompletedate').value;
      this.vdr.itemWeituoDesc = this.formGroup.get('itemWeituoDesc').value;
      // this.vdr.itemWeituoReqId = this.formGroup.get('').value;
      this.vdr.itemNianjian = this.formGroup.get('checkboxNianjian').value;
      this.vdr.itemNianjianTax = this.formGroup.get('itemNianjianTax').value;
      this.vdr.itemNianjianCost = this.formGroup.get('itemNianjianCost').value;
      this.vdr.itemNianjianCompletedate = this.formGroup.get('itemNianjianCompletedate').value;
      this.vdr.itemNianjianDesc = this.formGroup.get('itemNianjianDesc').value;
      // this.vdr.itemNianjianReqId = this.formGroup.get('').value;
      this.vdr.itemBuhuan = this.formGroup.get('checkboxBuhuan').value;
      this.vdr.itemBuhuanTax = this.formGroup.get('itemBuhuanTax').value;
      this.vdr.itemBuhuanCost = this.formGroup.get('itemBuhuanCost').value;
      this.vdr.itemBuhuanCompletedate = this.formGroup.get('itemBuhuanCompletedate').value;
      this.vdr.itemBuhuanDesc = this.formGroup.get('itemBuhuanDesc').value;
      // this.vdr.itemBuhuanReqId = this.formGroup.get('').value;
      this.vdr.itemQita = this.formGroup.get('checkboxQita').value;
      this.vdr.itemQitaCost = this.formGroup.get('itemQitaCost').value;
      this.vdr.itemQitaCompletedate = this.formGroup.get('itemQitaCompletedate').value;
      this.vdr.itemQitaDesc = this.formGroup.get('itemQitaDesc').value;
      // this.vdr.state = this.formGroup.get('').value;
      // this.vdr.createdate = this.formGroup.get('').value;
      // this.vdr.creator = this.formGroup.get('').value;
      // this.vdr.add1 = this.formGroup.get('').value;
      // this.vdr.add2 = this.formGroup.get('').value;
      // this.vdr.add3 = this.formGroup.get('').value;
      console.log(this.vdr);
      this.vendorService.saveVdr(JSON.stringify(this.vdr)).subscribe(
        res => {
          alert('成功保存代办商：' + this.vdr.vdrname);
        },
        err => {
          alert('错误：' + err.message);
        }
      );
    } else {
      // 触发所有校验
    }
  }

  submit() {
    // 提交请求
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

  itemdetail(event: any) {
    let name = event.target.name;
    console.log(this.vdr);
    switch (name) {
      case 'tidang':
        if (this.vdr.itemTidangReqId == null) {
          this.idService.createItemdetail(this.vdr.vdrid, JSON.parse(localStorage.getItem('currentUser'))['username'])
            .subscribe(
              res => {
                this.vdr.itemTidangReqId = res;
              },
              err => {
                return err;
              }
            );
        } else {
          this.router.navigateByUrl('/home/itemform/' + this.vdr.itemTidangReqId);
        }
        break;
      case '':
        //
        break;
      default:
      //
    }

  }

}

export class Contact {
  constructor(public name: string,
              public phone: number) {
  };
}
