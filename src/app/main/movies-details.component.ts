import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  id = true;
  movieDetails: any;
  movie: any;
  constructor(private movies: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.movieDetails = this.route.snapshot.data.dataTwo;
      this.movie = this.movieDetails;
  }

  image(data) {
    return `https://image.tmdb.org/t/p/original${data}`;
  }

}
