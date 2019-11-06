import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<any> {

  constructor(private movies: MoviesService) { }

  resolve() {
    return this.movies.getMovies();
  }
}
