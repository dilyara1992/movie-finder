import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) { }

  search: any;
  movies: any;
  input: any;


  getMovies(search: any){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=${this.search}&page=1&include_adult=false`
    console.log(url)
    return this._http.get(url)
    
  }

  getPopular(){
    const urlpop = `https://api.themoviedb.org/3/movie/popular?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&page=1&region=USA`
    console.log(urlpop);
    return this._http.get(urlpop)
  }
  
  onClick(){
    this.getMovies(this.input).subscribe(
      (res: any) => {
        this.movies = res.results;
        console.log(this.movies);
      }
    )
  }
  
  // onClick(){
  //   this._api.getMovies(this.input).subscribe(
  //     (res: any )=> {
  //       this.movies = res.results;
  //       console.log(this.movies);
  //     }
  //   )
  // }

}
