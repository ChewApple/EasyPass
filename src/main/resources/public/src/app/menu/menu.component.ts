import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PermissionService} from "../shared/services/permission.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;
  currentMenuId: number;
  userName: string;
  rolename: string;

  constructor(public router: Router,
              private pService: PermissionService) {
  }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('currentUser')).username;
    this.rolename = JSON.parse(localStorage.getItem('currentUser')).rolename;

    this.menus = [
      new Menu(1, '系统管理', [{id: 11, name: '用户管理', link: 'home/usermgt'}, {id: 12, name: '岗位管理', link: 'home/pstnmgt'}, {
        id: 13,
        name: '权限管理',
        link: 'home/authmgt'
      }]),
      new Menu(2, '客户管理', [{id: 21, name: '客户管理', link: 'home/cusmgt'}, {id: 22, name: '代办商管理', link: 'home/vdrmgt'}]),
      new Menu(3, '销售限价管理', [{id: 31, name: '销售限价管理', link: 'home/presmgt'}]),
      new Menu(4, '订单管理', [{id: 41, name: '办证车辆管理', link: 'home/carmgt'}, {id: 42, name: '订单管理', link: 'home/odrmgt'}]),
    ];
    if(!this.pService.checkPerm('1')){
      this.menus.splice(0,1);
    }


  }

  // target to hold menu information and enable the active-highlight function
  nav(m: subMenu) {
    this.router.navigateByUrl(m.link);
    this.currentMenuId = m.id;
  }
}

export class Menu {
  constructor(public id: number,
              public name: string,
              public subMenu: Array<subMenu>) {
  }
}

export class subMenu {
  constructor(public id: number,
              public name: string,
              public link: string) {
  }
}
