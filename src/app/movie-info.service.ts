import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieInfoService {
  baseUrlMovies: string = 'https://api.themoviedb.org/3/discover/movie';
  baseUrlGenre: string = 'https://api.themoviedb.org/3/genre/movie/list';
  key: string = '594792bbaf56e905471ed7af3e967aca';
  favorites: any = [];

  constructor(private http: HttpClient) {}

  getData = (
    releaseYear: string,
    votingAverage: string,
    genre: string
  ): any => {
    return this.http.get(this.baseUrlMovies, {
      params: {
        api_key: this.key,
        primary_release_year: releaseYear,
        ['vote_average.gte']: votingAverage,
        with_genres: genre,
      },
    });
  };

  getDefaultData = (votingAverage: string): any => {
    return this.http.get(this.baseUrlMovies, {
      params: {
        api_key: this.key,
        ['vote_average.gte']: votingAverage,
      },
    });
  };

  getGenres = (): any => {
    return this.http.get(this.baseUrlGenre, {
      params: {
        api_key: this.key,
      },
    });
  };

  addMovieToFavorites = (movie) => {
    this.favorites.push(movie);
    console.log(this.favorites);
  };

  getFavorites = () => {
    return this.favorites;
  };

  deleteFavorite = (index: number) => {
    this.favorites.splice(index, 1);
  };
}
