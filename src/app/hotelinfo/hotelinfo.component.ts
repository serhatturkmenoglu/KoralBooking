import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HotelItem } from '../types';

@Component({
  selector: 'app-hotelinfo',
  templateUrl: './hotelinfo.component.html',
  styleUrls: ['./hotelinfo.component.css']
})
export class HotelinfoComponent implements OnInit {

  hotelInfo: any=[];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.hotelConfig$.subscribe((info) => {this.hotelInfo = info})
  }

}
