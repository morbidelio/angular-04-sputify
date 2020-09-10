import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor( private http: HttpClient,
               spotify: SpotifyService) {
    console.log('iniciado');
    spotify.getNewReleases()
    .subscribe(data => {
      console.log(data);
      this.nuevasCanciones = data;
    });
  }
}
