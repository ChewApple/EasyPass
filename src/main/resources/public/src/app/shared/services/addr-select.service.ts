import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AddrSelectService {
  //
  // public pros: Observable<Province[]>;
  // public city: Observable<City[]>;
  // public area: Observable<Area[]>;

  constructor(private httpClient: HttpClient) { }

  getProCode(province:string): Observable<any>{
    let params = new HttpParams()
      .set('province', province);
    return this.httpClient.post('/api/procode',params,{ responseType: 'text' }).map(
      res=>{
        return res;
      },
      err=>{
        return err;
      }
    );
  }

  getShotCode(city:string): Observable<any>{
    let params = new HttpParams()
      .set('city', city);
    return this.httpClient.post('/api/shotcode',params,{ responseType: 'text' }).map(
      res=>{
        return res;
      },
      err=>{
        return err;
      }
    );
  }

  getPros(): Observable<any>{
    return this.httpClient.get('/api/province').map(
      res=>{
        return res;
      },
      err =>{
        return err;
      }
    )
  }

  getCities(pro:any):Observable<any>{
    let params = new HttpParams()
      .set('pname', pro);
    return this.httpClient.post('/api/city',params).map(
      res=>{
        return res;
      },
      err=>{
        return err;
      }
    );
  }

  getAreas(city:any):Observable<any>{
    let params = new HttpParams()
      .set('cname', city);
    return this.httpClient.post('/api/area',params).map(
      res=>{
        return res;
      },
      err=>{
        return err;
      }
    );
  }

}

export class Province{
  constructor(public id:number,
              public code:string,
              public name:string){}
}

export class City{
  constructor(public id:number,
              public code:string,
              public name:string,
              public provincecode){}
}

export class Area{
  constructor(public id:number,
              public code:string,
              public name:string,
              public citycode:string){}
}
