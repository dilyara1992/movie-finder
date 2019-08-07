import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularComponent,
    SearchComponent,
    NowPlayingComponent,
    TopRatedComponent,
    UpcomingComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgbModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
