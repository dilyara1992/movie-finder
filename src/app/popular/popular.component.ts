import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  // title = 'movie-finder';
  // itemsPerSlide = 5;
  // singleSlideOffset = true;



  constructor(public _api: ApiService) {}
  

  ngOnInit() {

  }
  
 
  


}
