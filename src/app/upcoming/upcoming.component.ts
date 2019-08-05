import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  movies: Array<Object>;
  //movies: Object;

  constructor(private _api: ApiService) { 
  
  }

  ngOnInit() {
    this._api.getUpcoming().subscribe((res: any) =>{
      this.movies = res.results;
      
    });
  }

}