import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { RouterModule } from '@angular/router';
import { DiscoverMoviesComponent } from './discover-movies/discover-movies.component';

@NgModule({
  declarations: [
    AppComponent, 
    MoviesDetailComponent, 
    DiscoverMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
