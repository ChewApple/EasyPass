import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginServiceService {
  // private url: string = 'http://locaolhost:4200/';
  redirectUrl: string;
  constructor(public httpClient: HttpClient) {
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('permission');
  }

  login(post): Observable<any> {
    // console.log(post);
    let params = new HttpParams()
      .set('username', post['username'])
      .set('password', post['password']);
    return this.httpClient.post('/api/login', params)
      .map(
        res => {
          if(res != null){
            localStorage.setItem('currentUser',JSON.stringify(res));
          }
          return res;
        },
        err => {
          return err;
        }
      );
    // console.log(post);
    // const getLoginUrl = this.url + 'login/'+post['username']+'/'+post['password'];
    // return this.http
    //   .get(getLoginUrl, {})
    //   .map(
    //     res => {
    //       if(res.json().status == true){
    //         localStorage.setItem('currentuser', JSON.stringify(res.json().data));
    //       }
    //       return res.json();
    //     },
    //     err =>{
    //       return err;
    //     }
    //   )
    // this.httpClient.post()
    // return Observable.of(true).delay(1000).do(val => localStorage.setItem('currentUser','admin'));
  }

}
