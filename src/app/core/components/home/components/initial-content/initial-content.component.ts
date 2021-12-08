import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.css']
})
export class InitialContentComponent implements OnInit {

  nextReleases:MovieModel[];

  constructor(private servicio:MoviesService) { 
    this.nextReleases = this.servicio.movies.filter((i) => i.Commingsoon == true);
  }

  ngOnInit(): void {
  }

  changeViewTo(view:string){
    this.servicio.getNameView.emit(view);
  }

}
