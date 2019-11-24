import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  newUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1';

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.newUrl)
      .pipe(catchError(this.handleError<any[]>('getMovies', [])))
  }

  getMovie(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${id}?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`);
  }

  search(title: string): Observable<any[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any[]>(`https://api.themoviedb.org/3/search/movie?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&query=${title}&page=1&include_adult=false`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
