import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Output() closeModal = new EventEmitter();
  @Input() result;
  results: any;
  show: boolean;
  loading: boolean;
  @Input() showModal;
  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.show = this.showModal;
    if (this.result) {
      this.loading = false;
      this.results = this.result.results;
    } else {
      this.loading = true;
      this.results = [];
    }
  }
}

