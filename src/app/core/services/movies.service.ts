import { EventEmitter, Injectable, Output } from '@angular/core';
import MoviesJson from '../../../assets/json/movies.json';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:MovieModel[] = MoviesJson;

  @Output() getNameView: EventEmitter<string> = new EventEmitter();

  constructor() { }
}
