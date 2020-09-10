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
      Authorization: 'Bearer BQCRfXSbQguzAMdyOVJGxJpKfGHlt5fVgMVe-RV_80omzLpYVgp-pBEuazQ23foqet0_ov0PWr_0E52A2ZmX5XJ8OkG_hp7E9G27aG9osY8NevIdOr2FFGo20GiLqD9QbRE49vZbBH8DvV7h7OtevsJWoZuTXnNgvAw'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers});
  }
  getNewReleases(): Observable<any>{
    return this.getQuery('browse/new-releases')
          .pipe(map((data: any) => data.albums.items));
  }
  getArtista(artista: string): Observable<any>{
    return this.getQuery(`search?q=${artista}&type=artist`)
          .pipe(map((data: any) => data.artists.items));
  }
}
