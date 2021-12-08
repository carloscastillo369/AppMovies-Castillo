import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CartMoviesModel } from '../../models/cartmovies.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartMovies:CartMoviesModel[] = [];
  emptyCart:boolean = false;
  totalPrice:number = 0;

  constructor(private servicio:MoviesService) { }

  ngOnInit(): void {
    this.servicio.getMovieToBuy.subscribe((movie: CartMoviesModel) =>{
      const filter = this.cartMovies.filter((i:CartMoviesModel) => i.id == movie.id);
      if(filter.length == 0){
        this.cartMovies.push(movie);
        this.totalPrice += movie.Price;
        this.emptyCart = true; 
      } else if(filter.length == 1){
        this.cartMovies = this.cartMovies.filter((i:CartMoviesModel) => i.id != movie.id);
        this.totalPrice -= filter[0].Price 
        this.cartMovies.push(movie);
        this.totalPrice += movie.Price   
      } 
    })
  }

  changeViewTo(view:string){
    this.servicio.getNameView.emit(view);
  }

  deleteMovie(movie:any){
    this.cartMovies = this.cartMovies.filter((i:any) => i.id != movie.id);
    this.totalPrice -= movie.Price;
    if(this.cartMovies.length == 0){
      this.emptyCart = false;
      this.totalPrice = 0;
    }
  }

  vaciarCart(){
    this.cartMovies = [];
    this.emptyCart = false;
    this.totalPrice = 0;
  }

}
