import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  title = 'movie-finder';
  itemsPerSlide = 5;
  singleSlideOffset = true;

  movies;

  constructor(public _api: ApiService) {}
  

  ngOnInit() {
    this._api.getPopular().subscribe(
      res => {
        this.movies = res;
        console.log(this.movies);
      }
    );
  }
  
 
  


}
