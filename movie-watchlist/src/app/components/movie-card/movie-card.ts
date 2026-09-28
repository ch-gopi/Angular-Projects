import { Component, input, output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  
    readonly movie = input.required<Movie>();
    readonly statusUpdate = output<number>();

    protected requestStatusUpdate(): void {
      this.statusUpdate.emit(this.movie().id);
    }

}
