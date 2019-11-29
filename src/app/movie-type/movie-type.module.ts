import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { MovieTypeResolverService } from '../common/movie-type-resolver.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'type/:id', component: MoviesComponent,
        resolve: { data: MovieTypeResolverService }
      },
    ])
  ]
})
export class MovieTypeModule { }
