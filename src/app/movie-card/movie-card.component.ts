import { Component, OnInit } from '@angular/core';
import { ApiService }  from '../api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor( public _api: ApiService) { }

  ngOnInit() {
  }

}
