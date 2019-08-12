import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'movie-finder';
  itemsPerSlide = 5;
  singleSlideOffset = true;

  movies;
  Topmovies;

  constructor(public _api: ApiService) {}
  

  ngOnInit() {
    this._api.getPopular().subscribe(
      (res: any) => {
       this.movies = res.results;
       console.log("testirui", this.movies);
      }
    );
    this._api.getTop().subscribe(
      (top:any)=> {
        this.Topmovies = top.results;
        console.log(this.Topmovies)
      }
    )
  }

}
