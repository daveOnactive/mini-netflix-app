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
      this.filterArr = this.filterMovies(this.moviesData.results);
      this.firstArr = this.filterArr.splice(0, 1);
      this.secondArr = this.filterArr.splice(1, 1);
      this.thirdArr = this.filterArr.splice(2, 1);

      this.filteredMovies = this.filterMoviesByYear(this.moviesData.results);

      this.mainPoster = this.filteredMovies.splice(1, 1);
      this.posterList = this.filteredMovies.splice(3, );
      this.moviesList = this.filterByRatings(this.moviesData.results);

      this.highPost = this.filterPoster(this.moviesData.results);
  }

  filterMovies(data) {
    return data.filter(x => x.rating >= 8 );
  }

  filterMoviesByYear(data: any[]) {
    return data.filter(movie => +movie.releaseYear >= 2010);
  }

  filterByRatings(data: any[]) {
    return data.filter(movie => movie.rating < 7.3 && movie.rating > 6 );
  }

  filterPoster(data: any[]) {
    return data.filter(movie => movie.objectId === 'Il8PQYM3zG');
  }

}
