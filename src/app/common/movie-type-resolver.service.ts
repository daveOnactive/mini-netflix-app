import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesTypeService } from './movies-type.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTypeResolverService implements Resolve<any> {

  constructor(private movies: MoviesTypeService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.movies.getMovies(id);
  }
}
