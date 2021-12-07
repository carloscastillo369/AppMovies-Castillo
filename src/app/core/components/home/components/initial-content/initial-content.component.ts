import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.css']
})
export class InitialContentComponent implements OnInit {

  nextReleases:any;

  constructor(private servicio:MoviesService) { 
    this.nextReleases = this.servicio.movies.filter((i) => i.Commingsoon == true);
  }

  ngOnInit(): void {
  }

  changeViewToMovies(view:string){
    this.servicio.getNameView.emit(view);
  }

}
