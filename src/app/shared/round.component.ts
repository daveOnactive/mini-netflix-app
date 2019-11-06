import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  @Input() rating: string;

  constructor() { }

  ngOnInit() {
  }

}
