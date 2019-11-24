import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  result: any;
  showModal;
  constructor(private movie: MoviesService) { }

  ngOnInit() {
  }

  searchMovie() {
    if (!this.search) {
      return false;
    }
    this.movie.search(this.search).subscribe(data => {
      this.result = data;
    });
    this.showModal = true;
    this.search = '';
  }

  cancel($event) {
      this.showModal = false;
      console.log($event);
  }


}
