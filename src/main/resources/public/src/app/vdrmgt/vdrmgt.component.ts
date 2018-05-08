import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {AddrSelectService, Area, City, Province} from "../shared/services/addr-select.service";
import {Observable} from "rxjs/Observable";
import {Vendor, VendorService} from "../service/vendor.service";

declare var $: any;

@Component({
  selector: 'app-vdrmgt',
  templateUrl: './vdrmgt.component.html',
  styleUrls: ['./vdrmgt.component.css']
})
export class VdrmgtComponent implements OnInit {
  private vdrs: Vendor[];
  private nameFilter: FormControl = new FormControl();
  private keyWord: string;
  province:Observable<Province[]>;
  city:Observable<City[]>;
  area:Observable<Area[]>;

  constructor(public router: Router,
              private vendorService: VendorService,
              private addrService: AddrSelectService) {
  }

  ngOnInit() {
    this.province = this.addrService.getPros();
    // this.vdrs = this.vendorService.getVendors();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyWord = value);
    $('#vdrmgt_form_dp').daterangepicker({
      "locale": {
        format: 'YYYY-MM-DD',
        separator: ' ~ ',
        applyLabel: "应用",
        cancelLabel: "取消",
        resetLabel: "重置",
      }
    });
  }

  create() {
    // 需要新建代办商并且返回新建代办商的id，作为参数传入初始化form
    let creator = JSON.parse(localStorage.getItem('currentUser'))['username'];
    this.vendorService.createVdr(creator).subscribe(
      res=>{
        let id = res;
        console.log(id);
        this.router.navigateByUrl('/home/vdrmgt/'+id);
      },
      err=>{

      }
    );
  }

  // update(vdr: Vdr) {
  //   this.router.navigateByUrl('/home/vdrmgt/' + vdr.id);
  // }

  showCity(item){
    let p = item.target.value;
    console.log(p);
    this.city = this.addrService.getCities(p);
    // this.area = this.addrService.getAreas();
  }

  showArea(item){
    let c = item.target.value;
    this.area = this.addrService.getAreas(c);
  }
}
