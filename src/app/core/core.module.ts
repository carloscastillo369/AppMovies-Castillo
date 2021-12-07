import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ListMoviesComponent,
    InfoMovieComponent,
    CartComponent,
    CoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
