import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: any=[];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.rooms$.subscribe((info) => {this.rooms = info})
  }

  search(){
    console.log(this.rooms)
  }
}
