import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://api.themoviedb.org/3/movie';
  searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=';
  apikey: string = '?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&page=1'
  search: string;
  movies: any;
  input: any;
  outputSignIn = {};
  signin: boolean = false;

  user = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    }


  constructor(public _http: HttpClient, public _router: Router ) {}
  
  getPopular(){
    return this._http.get(`${this.baseUrl}/popular${this.apikey}`);
  }
  getToprated(){
    return this._http.get(`${this.baseUrl}/top_rated${this.apikey}`);
  }
  getLatest(){
    return this._http.get(`${this.baseUrl}/latest${this.apikey}`);
  }

  getMovies(){
    console.log(`${this.searchUrl}${this.search}&page=1&include_adult=false`)
    return this._http.get(`${this.searchUrl}${this.search}&page=1&include_adult=false`)
  }

  createNewUser(){

    const url= 'http://localhost:3000/api/appUsers'
    console.log(this.user)
    this.signin = true;
    return this._http.post(url, this.user)
    
  }

  signIn(){
    const url = 'http://localhost:3000/api/appUsers/login';
    console.log(this.user);
    this.signin = true;
    return this._http.post(url, this.user);
  }
  
  onSearch(){
    this.getMovies().subscribe(
      (res: any )=> {
        this.movies = res.results;
        console.log(this.movies);
      }
    )
  }
  onSignIn(){
    this.signIn().subscribe(
      (res: any) => {
        this.outputSignIn = res;
        //this._router.navigate(['/home']);
        console.log(this.outputSignIn);
      }
    )
  }


}
