import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { share } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public apiService: ApiService){}

  ngOnInit()
  {
    this.apiService.hotelConfig$ = this.apiService.getHotelConfig().pipe(share()) ;
  }

}

