import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverMoviesComponent } from './discover-movies/discover-movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: DiscoverMoviesComponent,
  },
  {
    path: 'detail',
    component: MoviesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
