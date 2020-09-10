import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;

  constructor(private http: HttpClient, spotify: SpotifyService) {
    this.error = false;
    this.errorMsg = 'Esto es un error :C';
    this.loading = true;
    console.log('iniciado');
    spotify.getNewReleases().subscribe(
      (successSvc) => {
        console.log(successSvc);
        this.nuevasCanciones = successSvc;
        this.loading = false;
      },
      (errorSvc) => {
        this.error = true;
        this.errorMsg = errorSvc.error.error.message;
        this.loading = false;
      }
    );
  }
}
