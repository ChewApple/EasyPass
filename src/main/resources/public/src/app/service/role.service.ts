import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient) {
  }

  findAllAuth(): Observable<any> {
    return this.httpClient.get('/api/authlist').map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  getAuthNames(ids: string): Observable<any> {
    let params = new HttpParams()
      .set('authids', ids);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.httpClient.post('/api/authname', params, {headers}).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  addRole(role: Role): Observable<any> {
    let params = new HttpParams()
      .set('rolename', role.rolename)
      .set('authlist', role.authlist)
      .set('creator', role.creator)
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.httpClient.post('/api/addRole', params, {headers}).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    )
  }

  updateRole(role: Role) {
    let params = new HttpParams()
      .set('rolename', role.rolename)
      .set('authlist', role.authlist)
      .set('roleid', role.roleid + '')
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.httpClient.put('/api/role', params, {headers}).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    )
  }

  getRole(roleid: number): Observable<any> {
    // let params = new HttpParams().set('userid',userid+'');
    return this.httpClient.get('/api/role/' + roleid).map(
      res => {
        return res;
      }
    );
  }

  getRoles(): Observable<any> {
    return this.httpClient.get('/api/roles').map(
      res => {
        return res;
      }
    );
  }

}

export class Role {
  constructor(public roleid: number,
              public  rolename: string,
              public  authlist: string,
              public  createdate: string,
              public  creator: string,
              public  add1: string,
              public  add2: string,
              public  add3: string) {

  }
}

export class Auth {
  constructor(public authid: number,
              public authname: string,
              public authtype: string,
              public authsubtype: string,
              public desc: string,
              public add1: string,
              public add2: string,
              public add3: string) {
  }
}
