import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  api_key="522d722e";
  constructor(private http: HttpClient) { }

  initSources(params: any){
    return this.http.get(`https://www.omdbapi.com/?s=${params?.searchKey}&apikey=${this.api_key}&page=${params?.page}`)
  }

  getSearchById(id:any){
    return this.http.get(`https://www.omdbapi.com/?i=${id}&apikey=${this.api_key}`)

  }

}
