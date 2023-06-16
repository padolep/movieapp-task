# MovieApp 


# Demo Linl : https://pravinmovieapp.netlify.app 

# Git Repo : https://github.com/padolep/Movies-app-imdb.git

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Note 
 Api Limitation 
 api fetch only 10 record one time 
 implement pagination based 10 movies per page  
 After search its showing movie list 
 enter movies name in search bar its min  length 3 


 Module:
 Movies Module 
 having 2 Components 1)discover-movies,  2) movies-detail 
Creat Service for api integration

discover-movies:
shows all the movie listing fetch from "omdb" api. 

movies-detail :
view the detail of selected movie with all its Detail like  title, actor ,  year,  imdb rating.