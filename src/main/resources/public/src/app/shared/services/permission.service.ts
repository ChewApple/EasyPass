import {Injectable} from '@angular/core';

@Injectable()
export class PermissionService {

  perm: string = localStorage.getItem('permission');

  constructor() {
  }

  checkPerm(p: any) {
    let flag: boolean = false;
    let arr = this.perm.split(',');
    if (this.perm != null && this.perm != '') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == p) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }

}
