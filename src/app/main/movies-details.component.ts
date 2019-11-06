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
  movieDetails: any;
  displayDetails: any;
  constructor(private movies: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.movieDetails = this.route.snapshot.data.data;
      this.displayDetails = this.filterMovies(this.movieDetails.results);
  }

  filterMovies(data: any[]) {
    return data.filter(movie => movie.objectId === this.route.snapshot.paramMap.get('id'));
  }

}
