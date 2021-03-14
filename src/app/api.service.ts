import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map, share } from 'rxjs/operators';
import { HotelConfig } from './types';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  hotelConfig$ = this.getHotelConfig().pipe(share()) ;

  constructor(
    public http: HttpClient
  ) { }

  apiReq(body: any): Observable<any>  {
    return this.http.post('https://4001.hoteladvisor.net', body)
  }



  getHotelConfig(): Observable<HotelConfig> {
    return this.apiReq({
      Action: 'Execute',
      Object: 'SP_HOTEL_BOOKINGPARAMS',
      Parameters: {
        SUBDOMAIN: 'myhotel'
      }
    }).pipe(
      map((response: any) => {
      response[0][0].photos = response[1];
      return response[0][0] ;
      })
    )
  }



}
