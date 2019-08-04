import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { PopularComponent } from './popular/popular.component';
import { LoginComponent } from './login/login.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularComponent,
    LoginComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
