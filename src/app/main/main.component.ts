import { Component, OnInit, OnChanges } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  moviesData: any;
  filterArr: any;
  firstArr: any;
  secondArr: any;
  thirdArr: any;
  filteredMovies: any[];
  mainPoster: any;
  posterList: any;
  moviesList: any;
  highPost: any;
  constructor(private movies: MoviesService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
      this.moviesData = this.route.snapshot.data.data;

      this.firstArr = this.moviesData.results.slice(0, 1);
      this.secondArr = this.moviesData.results.splice(1, 1);
      this.thirdArr = this.moviesData.results.splice(2, 1);

      this.filteredMovies = this.filterMoviesByYear(this.moviesData.results);

      this.mainPoster = this.filteredMovies.splice(1, 1);
      this.posterList = this.filteredMovies;

      this.moviesList = this.filterByRatings(this.moviesData.results);

      this.highPost = this.filterPoster(this.moviesData.results);
  }

  filterMovies(data) {
    return data.filter(x => x.rating >= 8 );
  }

  filterMoviesByYear(data: any[]) {
    let list;
    const filter = data.filter(movie => movie.vote_average > 5.5 && movie.vote_average < 7);

    list = filter.splice(0, 5);
    return list;
  }

  filterByRatings(data: any[]) {
    let results;
    results = data.filter(movie => movie.vote_average > 7);
    return results.splice(0, 5);
  }

  filterPoster(data: any[]) {
    return data.filter(movie => movie.id === 420817);
  }

  image(data) {
    return `https://image.tmdb.org/t/p/original${data}`;
  }

}
