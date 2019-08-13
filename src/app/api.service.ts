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
  loginUsernameSignIn: String;
  loginPasswordSignIn: String;

  user = {
      NewUserFirstName: '',
      NewUerLastName: '',
      NewUserEmail: '',
      NewUserPassword: '',
    }
  



  getMovies(search: any){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=${this.search}&page=1&include_adult=false`
    console.log(url)
    return this._http.get(url)
    
  }

  getTop(){
    const urltop =`https://api.themoviedb.org/3/movie/top_rated?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&page=1`
    console.log(urltop)
    return this._http.get(urltop);
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

  createNewUser(){
    const url= 'http://localhost:3000/api/MovieAppUsers'
    console.log(this.user)
    return this._http.post(url, this.user)
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