import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DateService} from "../shared/services/date.service";

@Injectable()
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  saveCar(car: any): Observable<any>{
    let params = new HttpParams()
      .set('car', car);
    return this.httpClient.post('/api/saveCar',params);
  }

  getCar(carid: any): Observable<any> {
    return this.httpClient.get('/api/car/' + carid);
  }

  getCars(form: any): Observable<any> {
    let str = form.value['firstdate'];
    // console.log(form.value);
    // console.log(str);
    if(str != ''){

    }
    let params = new HttpParams()
      .set('carnum', form.value['carnum'])
      .set('carbrand', form.value['carbrand'])
      .set('carset', form.value['carset'])
      .set('firstdate1', str==''?'':str.split(',')[0])
      .set('firstdate2', str==''?'':str.split(',')[1])
      .set('creator', form.value['creator']);
    return this.httpClient.post('/api/cars', params);
  }

  getBrand(): Observable<any> {
    return this.httpClient.get('/api/brand').map(
      res=>{
        return res;
      },
      err=>{
        return err;
      }
    );
  }

  getSubBrand(brand: any): Observable<any> {
    let param = new HttpParams().set('brand', brand);
    return this.httpClient.post('/api/subBrand', param);
  }

}

export class Car {
  constructor(public carid: number,
              public carnum: string,
              public carbrand: string,
              public carset: string,
              public firstdate: string,
              public createdate: string,
              public creator: string,
              public add1: string,
              public add2: string,
              public add3: string) {
  }
}
