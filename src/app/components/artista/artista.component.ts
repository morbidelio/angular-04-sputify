import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = [];
  topSongs: any = [];
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.cargaArtista(params.id);
      this.cargaTopPicks(params.id);
    });
  }
  cargaArtista(id: string): void{
    this.loading = true;
    this.spotify.getArtista(id).subscribe(success => {
      this.artista = success;
      console.log(this.artista);
      this.loading = false;
    });
  }
  cargaTopPicks(id: string): void{
    this.loading = true;
    this.spotify.getTopSongs(id).subscribe(success => {
      this.topSongs = success;
      console.log(this.topSongs);
      this.loading = false;
    });
  }
}
