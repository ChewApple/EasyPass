import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  ContentTitle = '首页';
  ContentDesc = '这里是首页';

  constructor(public router: Router) {
    // router.events.filter(event => event
    //   instanceof NavigationEnd)
    //   .subscribe((event: NavigationEnd) => {
    //     if (event.url == '/home') {
    //       this.ContentTitle = '首页';
    //     } else if (event.url == '/usermgt' || event.url.indexOf('userform') != -1) {
    //       this.ContentTitle = '用户管理';
    //     } else if (event.url == '/pstnmgt' || event.url.indexOf('pstnform') != -1) {
    //       this.ContentTitle = '岗位管理';
    //     } else if (event.url == '/authmgt') {
    //       this.ContentTitle = '权限管理';
    //     } else if (event.url == '/cusmgt' || event.url.indexOf('cusform') != -1) {
    //       this.ContentTitle = '客户管理';
    //     } else if (event.url == '/vdrmgt' || event.url.indexOf('vdrform') != -1) {
    //       this.ContentTitle = '代办商管理';
    //     } else if (event.url == '/presmgt' || event.url.indexOf('presform') != -1) {
    //       this.ContentTitle = '销售预录管理';
    //     } else if (event.url == '/carmgt' || event.url.indexOf('carform') != -1) {
    //       this.ContentTitle = '车辆管理';
    //     } else if (event.url == '/odrmgt' || event.url.indexOf('orderform') != -1) {
    //       this.ContentTitle = '订单管理';
    //     }
    //   });
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('hello');
    // }, 3000);
    // setInterval(() => {
    //   console.log('hello');
    // }, 3000);
  }

  doOnClick(event: any) {
    console.log(event);
  }
}
