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
  signInpostUrl = 'http://localhost:3000/api/appUsers/login'
  
  search: string;
  movies: any;
 
  userDataRecieved: Object;
  datarecieved: boolean = false;
  errors: any;

  tempforLogout: any;


  userIdToken = {
    userId: '',
    id: '',
    token: ''
  }

  user = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
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
    // console.log(this.user)
    // this.signin = true;
    return this._http.post(url, this.user)
    
  }

  signInpost(){
    // console.log(this.user);
    return this._http.post(this.signInpostUrl, this.user);
  }

  getUserInfo(){
    const url =`http://localhost:3000/api/appUsers/${this.userIdToken.userId}?access_token=${this.userIdToken.id}`
    return this._http.get(url);
  }
  
  userCheckgetIdToken(){
    this.signInpost().subscribe(
      (res: any) => {
        this.userIdToken = res;
        console.log(this.userIdToken)
        this.dealwithUserInfo();
        this.datarecieved = true;
        alert('Congratulations! You successfully Logged In!');
        this._router.navigate(['/home']);
      }, 
        error => {
          this.errors = error;
          //console.log(error)
          alert('Error! Please check your email and password.');
        }
    );
    
  }

  dealwithUserInfo(){
    this.getUserInfo().subscribe(
      (res: any) => {
        this.user = res;
        console.log(this.user);
        this.datarecieved == true;
      }
    )
  }

  sendPostrequesttologOut(){
    const urlLogout = 'http://localhost:3000/api/appUsers/logout';
    console.log(this.userIdToken.token);
    return this._http.post(urlLogout, this.userIdToken);
  }

  onLogout(){
    this.sendPostrequesttologOut().subscribe(
      (res: any) => {
        this.tempforLogout = res;
        console.log(this.tempforLogout);
      }
    )
  }

}
