import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { CircleComponent } from './circle.component';
import { TagComponent } from './tag.component';
import { TimeComponent } from './time.component';
import { GenrePipe } from './genre.pipe';



@NgModule({
  declarations: [
    StarComponent,
    CircleComponent,
    TagComponent,
    TimeComponent,
    GenrePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CircleComponent,
    TagComponent,
    TimeComponent,
    GenrePipe
  ]
})
export class SharedModule { }
