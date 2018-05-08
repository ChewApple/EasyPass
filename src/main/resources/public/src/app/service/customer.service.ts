import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Role} from "./role.service";
import {User} from "./user-service.service";

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<any> {
    return this.httpClient.get('/api/allCustomers').map(
      res => {
        return res;
      }
    );
  }

  updateCustomer(cus: Customer) {
    let params = new HttpParams()
      .set('cusid', cus.cusid+'')
      .set('cusname', cus.cusname)
      .set('contact', cus.contact)
      .set('contactPhone', cus.contactPhone)
      .set('cusmode', cus.cusmode)
      .set('address', cus.address)
      .set('state', cus.state)
      .set('createdate', cus.createdate)
      .set('creator', cus.creator)
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.httpClient.put('/api/customer',params, {headers}).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    )
  }

  getCustomer(cusid: number): Observable<any> {
    // let params = new HttpParams().set('userid',userid+'');
    return this.httpClient.get('/api/customer/'+cusid).map(
      res => {
        return res;
      },
      err =>{
        return err;
      }
    );
  }

  getCustomers(form): Observable<any> {
    let params = new HttpParams()
      .set('cusname', form['cusname'])
      .set('cusmode', form['cusmode'])
      .set('contact', form['contact'])
      .set('contactPhone', form['contactPhone']);
    return this.httpClient.post('/api/customers', params).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  }

  addCus(cus: Customer): Observable<any> {
    let params = new HttpParams()
      .set('cusname', cus.cusname)
      .set('contact', cus.contact)
      .set('contactPhone', cus.contactPhone)
      .set('cusmode', cus.cusmode)
      .set('address', cus.address)
      .set('state', cus.state)
      .set('creator', cus.creator)
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.httpClient.post('/api/addCus', params, {headers}).map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    )
  }
}

export class Customer{
  constructor(
    public cusid :number,
    public cusname: string,
    public contact: string,
    public contactPhone: string,
    public cusmode: string,
    public address: string,
    public state: string,
    public createdate: string,
    public creator: string,
    public add1: string,
    public add2: string,
    public add3: string
  ){}
}
