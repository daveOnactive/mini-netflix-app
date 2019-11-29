import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  result;
  movieList;
  heading: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.result = this.getMovies();
    this.movieList = this.result.results;
    if (this.route.snapshot.params.id === 'popular') {
      this.heading = 'Popular movies';
    } else if (this.route.snapshot.params.id === 'nowplaying') {
      this.heading = 'Nowplaying movies';
    } else if (this.route.snapshot.params.id === 'upcoming') {
      this.heading = 'Upcoming movies';
    }
  }

  image(data) {
    return `https://image.tmdb.org/t/p/original${data}`;
  }

  getMovies() {
    return this.route.snapshot.data['data'];
  }
}
