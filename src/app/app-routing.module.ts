import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { RegisterComponent} from './register/register.component';
import { SigninComponent} from './signin/signin.component';
import { FavmoviesComponent } from './favmovies/favmovies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AllmoviesComponent},
  {path: 'app', component: AppComponent},
  {path: "search", component: SearchComponent},
  {path: 'signin/register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'fav-movies', component: FavmoviesComponent},
  {path: 'movie-card', component: MovieCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
