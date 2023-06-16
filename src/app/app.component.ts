import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MoviesService } from './service/movies.service';
import { Subscriber, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit {
 
  constructor() {}
  
  ngOnInit(): void {
   
  }
 
}
