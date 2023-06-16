import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MoviesService } from '../service/movies.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.css'],
})
export class DiscoverMoviesComponent {
  sources: any;
  moviesdetail: any = [];
  totalResults: any;
  totalpage: any;
  page: number = 1;
  public resultPerPage: any = 10;
  public optionsPerPage: any = [10, 20, 50]
  public totalRecords: number = 0;
  public totalPage: number = 0;
  public searchKey: any = '';
  moviesdetailForm!: FormGroup;
  searchValue: any = {};
  params: any = {};
  constructor(private moviesapi: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.searchKey = localStorage.getItem('searchKey');

    if (this.searchKey) {
      this.getMoviesList();
      localStorage.removeItem('searchKey');
    }else {
      this.searchKey = 'abcd';
      this.getMoviesList();
     
     
    }
  }

  onSearch(event: any) {
    console.log('event', event.target.value);
    if (event?.target?.value?.length > 2) {
      this.searchKey = event?.target?.value;
      this.getMoviesList();
    }
  }
  getMoviesList() {
    this.params = {
      page: this.page,
      searchKey: this.searchKey,
    };
    this.moviesapi
      .initSources(this.params)
      .pipe(debounceTime(3000), distinctUntilChanged())
      .subscribe((res: any) => {
        this.sources = res?.Search;
        this.totalResults = res?.totalResults;
        this.totalpage = this.totalResults / 10;
        console.log('this.sources', this.sources);
      });
  }

  onReadMoreClick(event: any) {
    this.router.navigate(['/detail'], {
      queryParams: { id: event.imdbID, searchKey: this.searchKey },
    });
  }


  recordPerPage(event : any) {
    
    this.resultPerPage = event.target.value;
    
  }
  prepage() {
    this.page--;
    this.getMoviesList();
  }

  nextpage() {
    this.page++;
    this.getMoviesList();
  }
}
