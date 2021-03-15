import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map, share } from 'rxjs/operators';
import { HotelConfig, Rooms } from './types';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  hotelConfig$ = this.getHotelConfig().pipe(share()) ;
  rooms$       = this.getRooms().pipe(share()) ;

  constructor(
    public http: HttpClient
  ) { }

  apiReq(body: any): Observable<any>  {
    return this.http.post('https://4001.hoteladvisor.net', body )
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
  getRooms(): Observable<Rooms> {
    return this.apiReq({
      Action: 'Execute',
      Object: 'SP_PORTALV4_HOTELDETAILPRICE',
      Parameters: {
        ADULT: 2,
        CHECKIN: '2021-03-14 00:00',
        CHECKOUT:'2021-03-16 00:00',
        CHILDAGES: '',
        COUNTRYCODE: '',
        CURRENCY: 'EUR',
        HOTELID: 18892,
        IPADDRESS: '',
        LANGUAGE: 'tr',
        PORTALID: 1,
        PORTALSELLERID: null,
        PROMOCODE: '',
        SESSION: null
      }
    }).pipe(
      map((response: any) => {
      //response[0][0].photos = response[1];
      return response[0] ;
      })
    )
  }



}
