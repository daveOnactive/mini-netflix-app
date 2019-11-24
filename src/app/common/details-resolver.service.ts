import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../shared/movies.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<any> {

  constructor(private movie: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.movie.getMovie(+id);
  }
}
