import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    StarComponent,
    CircleComponent,
    TagComponent,
    TimeComponent,
    FooterComponent,
    MoviesDetailsComponent,
    RoundComponent,
    FavComponent,
    FavlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'Movies', component: MainComponent, resolve: { data: MoviesResolverService } },
        { path: 'Movies/:id', component: MoviesDetailsComponent,
        resolve: { data: MoviesResolverService } },
        { path: 'Favourite', component: FavlistComponent },
        { path: '', pathMatch: 'full', redirectTo: '/Movies' }
      ]
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
