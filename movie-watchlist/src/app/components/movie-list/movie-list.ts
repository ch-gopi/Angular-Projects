import { Component, signal, computed } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { Movie, WatchStatus } from '../../models/movie';
import { MovieSearch } from '../movie-search/movie-search';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard, MovieSearch],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

  protected readonly searchQuery = signal('');

  protected readonly movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      genre: 'Science Fiction',
      rating: 8.8,
      status: 'watched',
      posterUrl: 'images/inception.png'
    },
    {
      id: 2,
      title: 'The Martian',
      year: 2015,
      genre: 'Science Fiction',
      rating: 8,
      status: 'watching',
      posterUrl: 'images/the-martian.png'
    },
    {
      id: 3,
      title: 'The Wild Robot',
      year: 2024,
      genre: 'Animation',
      status: 'planned',
      posterUrl: 'images/the-wild-robot.png'
    }
  ]);

  protected readonly filteredMovies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return this.movies();
    }

    return this.movies().filter((movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query)
    );
  });

  protected updateWatchStatus(movieId: number): void {
    this.movies.update((movies) =>
      movies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              status: this.getNextStatus(movie.status)
            }
          : movie
      )
    );
  }
  private getNextStatus(status: WatchStatus): WatchStatus {
    if (status === 'planned') {
      return 'watching';
    }

    if (status === 'watching') {
      return 'watched';
    }

    return 'planned';
  }
}
