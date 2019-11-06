import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  url = 'https://guides.peruzal.com/xamarin-forms-guide/files/movies.json';

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(catchError(this.handleError<any[]>('getMovies', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
