import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 28) {
      return 'action';
    } else if (value === 16) {
      return 'animated';
    } else if (value === 99) {
      return 'documentary';
    } else if (value === 18) {
      return 'drama';
    } else if (value === 10751) {
      return 'family';
    } else if (value === 14) {
      return 'fantasy';
    } else if (value === 36) {
      return 'history';
    } else if (value === 35) {
      return 'comedy';
    } else if (value === 10752) {
      return 'war';
    } else if (value === 80) {
      return 'crime';
    } else if (value === 10402) {
      return 'music';
    } else if (value === 9648) {
      return 'mystery';
    } else if (value === 10749) {
      return 'romance';
    } else if (value === 878) {
      return 'sci fi';
    } else if (value === 27) {
      return 'horror';
    } else if (value === 10770) {
      return 'TV movie';
    } else if (value === 53) {
      return 'thriller';
    } else if (value === 37) {
      return 'wastern';
    } else if (value === 12) {
      return 'adventure';
    }
  }

}
