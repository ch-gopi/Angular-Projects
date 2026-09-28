import { Component, model } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  imports: [],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css',
})
export class MovieSearch {
  readonly query = model('');
}
