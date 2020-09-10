import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading = false;
  constructor(private spotify: SpotifyService) {
  }
  ngOnInit(): void {}
  buscar(termino: string): void {
    this.loading = true;
    if(termino === ''){
      this.loading = false;
      this.artistas = [];
    }
    else{
      console.log(termino);
      this.spotify.getArtistas(termino).subscribe((data) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
