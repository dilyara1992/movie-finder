import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movie: any;

  constructor(public _api: ApiService) { }

  ngOnInit() {
  }

  // onClick(){
  //   this._api.getMovies().subscribe(
  //     res => {
  //       this.movie = res;
  //     }
  //   )
  // }

}
