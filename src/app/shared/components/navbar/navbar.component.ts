import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hideHome!:boolean;
  @Input() hideList!:boolean;
  @Input() hideCart!:boolean;
  @Input() hideSignIn!:boolean;
  @Input() hideSignUp!:boolean;
  @Output() changeViewTo = new EventEmitter<string>();

  constructor(private servicio:MoviesService) { }

  ngOnInit(): void {
  }

  changeView(view:string){
    this.servicio.getNameView.emit(view);
  }

}
