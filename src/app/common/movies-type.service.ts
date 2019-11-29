import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesTypeService {

  constructor(private http: HttpClient,
              private router: Router) { }
  upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1';
  nowplayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1';
  popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1';

  getMovies(type: string): Observable<any[]> {
    if (type === 'upcoming') {
      return this.http.get<any[]>(this.upcomingUrl)
      .pipe(catchError(this.handleError<any[]>('getMovies', [])));
    } else if (type === 'nowplaying') {
      return this.http.get<any[]>(this.nowplayingUrl)
      .pipe(catchError(this.handleError<any[]>('getMovies', [])));
    } else if (type === 'popular') {
      return this.http.get<any[]>(this.popularUrl)
      .pipe(catchError(this.handleError<any[]>('getMovies', [])));
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.router.navigate(['/404']);
      return of(result as T);
    };
  }
}

