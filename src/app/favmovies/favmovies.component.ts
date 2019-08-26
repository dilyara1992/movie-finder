import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.scss']
})
export class FavmoviesComponent implements OnInit {

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }

}
