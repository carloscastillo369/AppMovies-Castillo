import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-buttons-function',
  templateUrl: './buttons-function.component.html',
  styleUrls: ['./buttons-function.component.css']
})
export class ButtonsFunctionComponent implements OnInit {

  @Input() movie!:MovieModel;

  constructor(private servicio:MoviesService) { }

  ngOnInit(): void {
  }

  buyMovie(movieToBuy:any){
    this.servicio.getMovieToBuy.emit(movieToBuy);    
  }

}
