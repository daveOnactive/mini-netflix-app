import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FavService } from './fav.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  inFav;
  @Input() favList;
  favArray: any[] = [];
  check;
  display: boolean;
  constructor(private fav: FavService) { }

  ngOnInit() {
    this.check = this.fav.getFav(this.favList);
    this.check ? this.inFav = true : this.inFav = false;
  }

  addFav() {
    if (this.inFav) {
      this.fav.removeFav(this.favList);
      this.inFav = false;
    } else {
      this.fav.addToFav(this.favList);
      this.inFav = true;
    }
  }

}

