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
  justApikey: string ='6261ea3e117e2656a18f191409e668d9';
  
  search: string;
  movies: any;

  searchresult: Array<Object>;

  favourites: Object;

  movie: any; //getting details for one particular movie
 
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

  example (movie: any){
    this.movie = movie;
    console.log("movie: ", this.movie)
    this._router.navigate([`details/${movie.id}`]);
  }

  getMovies(){
    console.log(`${this.searchUrl}${this.search}&page=1&include_adult=false`)
    return this._http.get(`${this.searchUrl}${this.search}&page=1&include_adult=false`)
  }

  getMovie(id: string){
    const url = `${this.baseUrl}/${id}?api_key=${this.justApikey}&language=en-US`;
    return this._http.get(url);
  }
  // https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=qu&page=1&include_adult=false
  
  getSearch(query){
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=${query}&page=1&include_adult=false`)
  }
  getonSearch(){
  this.getSearch(this.search).subscribe( (res: any) =>{
    this.searchresult = res.results;
    console.log(this.searchresult)
  })
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
    const urlLogout = `http://localhost:3000/api/appUsers/logout?access_token=${this.userIdToken.token}`;
    console.log(this.userIdToken.token);
    return this._http.post(urlLogout, this.userIdToken.token);
  }

  onLogout(){
    
    console.log(this.datarecieved)
    this.sendPostrequesttologOut().subscribe(
      (res: any) => {
        this.tempforLogout = res;
        sessionStorage.clear();
        this.datarecieved = false;
        this._router.navigate(['/signin']);
        console.log(this.tempforLogout);
      }
    )
  }

  // onLogout(){
  //   sessionStorage.clear();
  //   this._router.navigate(['/signin']);

  // }

  postfav: any;

  // http://localhost:3000/api/appUsers/5d55c5812ac5c51f2f58b372/fav-movies?access_token=tJYKs4OWiVEYGG9IeNVtAzE6CSIYAa8EiRjhVouGUT4wp2OZkIIDHGg6Ykq6yyj8
  postFavourites(){
    delete this.movie.id;

    const url = `http://localhost:3000/api/appUsers/${this.userIdToken.userId}/fav-movies?access_token=${this.userIdToken.token}`
    console.log("myuserid: ",this.userIdToken.userId);
    console.log("my token",this.userIdToken.token);
    this._http.post(url, this.movie).subscribe(
      res=>{
        alert('Favourite movie is saved!')
        this.postfav = res;
        console.log(this.postfav);
      }
    );
  }

  getFavourites(){
    const url = `http://localhost:3000/api/appUsers/${this.userIdToken.userId}/fav-movies?access_token=${this.userIdToken.token}`
    return this._http.get(url);
  }

  showFavourites(){
    this.getFavourites().subscribe(
      (res: any)=>{
        this.favourites = res;
        console.log(this.favourites)
      }
    )
  }

}
