import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {
  
  popular: Array<Object>;
  topRated: Object[] = [];
  latestMovie: Object[] = [];

  constructor(private _api: ApiService) { 
  }
  
  ngOnInit() {
    
    this._api.getPopular().subscribe(
      (res: any)=>{
        this.popular = res.results;
        console.log(this.popular)
      }
    )
    this._api.getToprated().subscribe(
      (res:any) => {
        this.topRated = res.results;
      }
    )
    this._api.getLatest().subscribe(
      (res:any) => {
        this.latestMovie = res.results;
      }
    )
  
  }




}
