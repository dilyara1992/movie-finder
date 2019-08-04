import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) { }

  search: any;

  api_key: string = "6261ea3e117e2656a18f191409e668d9";
  
  getMovieList(query){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=${this.search}&page=1&include_adult=false`
    console.log(url)
    return this._http.get(url)
    
  }

  getPopular(){
    const urlpop = `https://api.themoviedb.org/3/movie/popular?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&page=1&region=USA`
    console.log(urlpop);
    return this._http.get(urlpop)
  }

  getUpcoming(){
    const urlpop = 'https://api.themoviedb.org/3/movie/upcoming?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US';
    // console.log(urlpop);
    // return this._http.get(urlpop); 

    const base_url = `https://api.themoviedb.org/3/search/movie`;
    let myParams = new URLSearchParams(base_url); 
    myParams.append('api_key', this.api_key);
    myParams.append('language', 'en-US');
    myParams.append('query', this.search);
    myParams.append('page', '1')
    myParams.append('include_adult', 'false')
    console.log('testing params', myParams, 'testing params2');
    //return this._http.get(base_url, {myParams})
    return this._http.get(urlpop); 
  }

  getMoviesByGenre() {
  
    return this._http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US');     
  }
}
