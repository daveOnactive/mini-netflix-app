import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesTypeService } from './movies-type.service';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit, OnChanges {
  @Input() moviesList;
  movieList;
  active: string;
  loading: boolean;
  constructor(private movies: MoviesTypeService) { }

  ngOnInit() {
    this.active = 'popular';
  }

  ngOnChanges() {
    this.movieList = this.moviesList;
  }

  image(data) {
    return `https://image.tmdb.org/t/p/original${data}`;
  }

  upComing() {
    this.movieList = [];
    this.active = 'upcoming';
    this.loading = true;
    this.getData(this.movies.getMovies(this.active));
  }

  popular() {
    this.active = 'popular';
    this.movieList = this.moviesList;
  }

  nowPlaying() {
    this.movieList = [];
    this.active = 'nowplaying';
    this.loading = true;
    this.getData(this.movies.getMovies(this.active));
  }

  filterData(data: any) {
    let result;
    result = data.results.filter(item => item.vote_average > 7);

    return result.splice(0, 5);
  }

  getData(item: any) {
    // tslint:disable-next-line: no-shadowed-variable
    return item.subscribe( data => {
      this.movieList = this.filterData(data);
      if (this.movieList) {
        this.loading = false;
      }
    });
  }

}
