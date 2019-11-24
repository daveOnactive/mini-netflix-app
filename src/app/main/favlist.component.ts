import { Component, OnInit } from '@angular/core';
import { FavService } from '../shared/fav.service';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {
  favlist: any[];
  id = true;
  constructor(private fav: FavService) { }

  ngOnInit() {
    this.favlist = this.fav.getAll();
  }

  delete(data) {
    this.fav.removeFav(data);
    this.favlist = this.fav.getAll();
  }

  image(data) {
    return `https://image.tmdb.org/t/p/original${data}`;
  }

}
