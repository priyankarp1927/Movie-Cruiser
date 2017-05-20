import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies(movieName: string) {
    return this.http.get('http://www.omdbapi.com/?s=' + movieName )
    .map((response) => response.json().Search || []);
  }
}
