import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input()
  movie: Object;

  ngOnInit() {
    console.log("this is movie", this.movie)
  }

}
