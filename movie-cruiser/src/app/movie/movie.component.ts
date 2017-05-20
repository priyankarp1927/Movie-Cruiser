import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
        .subscribe(movies => this.movies = movies);
        // console.log("inside movie.ts"+this.movies);
    }

}
