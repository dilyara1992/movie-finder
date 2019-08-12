import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  title: string;
  movies: Array<Object>;
  sidenav: boolean;
  
  constructor(private _api: ApiService, 
              private router: ActivatedRoute) { }

  ngOnInit() {
    // this.router.params.subscribe((params) => {
    //   const id = params['id'];
    //   this.title = params['name'];
    //   this._api.getMoviesByGenre(id).subscribe((res:any) => {
    //     this.movies = res.results;
    //   });
    // })

    this._api.getMoviesByGenre().subscribe((res:any) => {
      this.movies = res.genres;
      console.log(this.movies);
    });
  }

  
  
  // showSideNavMenu(){
  //   this._api.getMoviesByGenre().subscribe((res:any) => {
  //     this.movies = res.results;
  //   });
  // }
  showSideNavMenu (){
    this.sidenav = !this.sidenav;

     
  }



}