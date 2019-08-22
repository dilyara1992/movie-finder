import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Object;

  images: Array<Object> = [
    {image: 'https://image.tmdb.org/t/p/w500/{{movie.poster_path}}'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
