import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // movie: Object;

  constructor(private _routes: ActivatedRoute, private _api: ApiService) { }

  ngOnInit() {
    // this._routes.params.subscribe( results =>{
    //   const id = results['id'];
    //   this._api.getMovie(id).subscribe(
    //     (details: any) =>{
    //       this.movie = details.results;
    //       console.log(this.movie);
    //     }
    //   )
    // }
    // )
  }
}
