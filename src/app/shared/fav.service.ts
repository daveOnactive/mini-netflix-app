import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  getIndex;

  constructor() { }
  getFav(data) {
    const list = JSON.parse(sessionStorage.getItem(data.title));
    return list;
  }

  addToFav(data) {
    sessionStorage.setItem(data.title, JSON.stringify(data));
  }

  getAll() {
    const movies = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      let value = JSON.parse(sessionStorage.getItem(key));
      movies.push(value);
    }
    return movies;
  }

  removeFav(data) {
    sessionStorage.removeItem(data.title);
  }

  rmeoveAll() {
    sessionStorage.clear();
  }
}
