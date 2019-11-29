import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav.component';
import { StarComponent } from './shared/star.component';
import { CircleComponent } from './shared/circle.component';
import { TagComponent } from './shared/tag.component';
import { TimeComponent } from './shared/time.component';
import { FooterComponent } from './main/footer/footer.component';
import { MoviesDetailsComponent } from './main/movies-details.component';
import { RoundComponent } from './shared/round.component';
import { MoviesResolverService } from './shared/movies-resolver.service';
import { FavComponent } from './shared/fav.component';
import { FavlistComponent } from './main/favlist.component';
import { GenrePipe } from './shared/genre.pipe';
import { DetailsResolverService } from './common/details-resolver.service';
import { ModalComponent } from './common/modal.component';
import { SearchComponent } from './common/search.component';
import { DetailsGuard } from './common/details.guard';
import { Page404Component } from './common/page404.component';
import { HighlightComponent } from './common/highlight.component';
import { MovieTypeModule } from './movie-type/movie-type.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    MoviesDetailsComponent,
    RoundComponent,
    FavComponent,
    FavlistComponent,
    ModalComponent,
    SearchComponent,
    Page404Component,
    HighlightComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MovieTypeModule,
    SharedModule,
    RouterModule.forRoot(
      [
        {
          path: 'Movies', component: MainComponent,
          resolve: { data: MoviesResolverService }
        },
        {
          path: 'Movies/:id', component: MoviesDetailsComponent,
          canActivate: [DetailsGuard],
          resolve: { dataTwo: DetailsResolverService }
       },
       {
         path: 'Favourite', component: FavlistComponent
        },
        {
          path: '404', component: Page404Component
        },
        {
          path: '', pathMatch: 'full', redirectTo: '/Movies'
        }
      ],
      {
        scrollPositionRestoration: 'enabled'
      }
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
