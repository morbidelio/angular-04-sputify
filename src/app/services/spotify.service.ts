import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  getQuery(query: string): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC2vRnVpUxG574b-pGACUPFtntyS8lXTfQdJcNYzqzo1jYcegqiO2IWcnHlyfjTJ0MAvvUeSS68KnEhkB6oYlCj6NvK-9oKY9LandUDTs6LaCW5N5-JR-jak2_UhzqCtPwSn-KwC3bNS1i8SM1HgR_iS-gswYkqfro?country=CL'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers});
  }
  getNewReleases(): Observable<any>{
    return this.getQuery('browse/new-releases')
          .pipe(map((data: any) => data.albums.items));
  }
  getArtistas(artista: string): Observable<any>{
    return this.getQuery(`search?q=${artista}&type=artist`)
          .pipe(map((data: any) => data.artists.items));
  }
  getArtista(artistaId: string): Observable<any>{
    return this.getQuery(`artists/${artistaId}`);
  }
  getTopSongs(artistaId: string): Observable<any>{
    return this.getQuery(`artists/${artistaId}/top-tracks?country=CL`)
          .pipe(map((data: any) => data.tracks));
  }
}
