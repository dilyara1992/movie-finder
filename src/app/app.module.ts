import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MDBBootstrapModule } from 'angular-bootstrap-md';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import 'hammerjs';


import { SearchComponent } from './search/search.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { FavmoviesComponent } from './favmovies/favmovies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RegisterComponent,
    SigninComponent,
    FavmoviesComponent,
    MovieCardComponent,
    AllmoviesComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgbModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
