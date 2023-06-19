import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
})
export class MoviesDetailComponent {
  public imdbID: any;
  public movieData: any;
  public searchKey: any;
  public showLoader: boolean = false;
  constructor(  private activatedRoute: ActivatedRoute,    private movieservice: MoviesService,    private router: Router  ) {
    this.activatedRoute.queryParams
      .pipe(
        map((qparams: any) => qparams),
        tap((data) => {
          this.imdbID = data?.id;
          this.searchKey = data?.searchKey;
        })
      )
      .subscribe(() => {
        this.getMovieDetail();
      });
  }

  //function for api call to get movie full detail
  getMovieDetail() {
    this.showLoader = true;
    this.movieservice.getSearchById(this.imdbID).subscribe((res: any) => {
      if (res.Response) {
        this.movieData = res;
      }
      this.showLoader = false;
    });
    
  }

  back() {
    localStorage.setItem('searchKey', this.searchKey);
    this.router.navigate(['/list']);
  }

}
