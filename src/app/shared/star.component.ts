import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating;
  starWidth: number;
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 10;
  }

}
