import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MovieList } from './components/movie-list/movie-list';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    MovieList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
