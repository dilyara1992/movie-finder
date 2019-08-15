import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { SigninComponent} from './signin/signin.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: "popular", component: PopularComponent},
  {path: "upcoming", component: UpcomingComponent },
  {path: "top-rated", component: TopRatedComponent},
  {path: "now-playing", component: NowPlayingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
