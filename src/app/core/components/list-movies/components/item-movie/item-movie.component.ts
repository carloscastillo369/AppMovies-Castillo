import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.css']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie!:MovieModel;

  constructor(private servicio:MoviesService) { }

  ngOnInit(): void {
  }

  getInfoMovie(movie:MovieModel) {
    this.servicio.getNameView.emit('infoMovie');
    this.servicio.getInfoMovie.emit(movie);
  }

}
