import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tags: any[];
  geners: any[];

  constructor() { }

  ngOnInit() {
    this.geners = this.tags.slice(0, 1);
  }

}
