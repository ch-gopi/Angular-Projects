export type WatchStatus = 'planned' | 'watching' | 'watched';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating?: number;
  status: WatchStatus;
  posterUrl: string;
}