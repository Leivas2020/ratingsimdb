import { Injectable } from '@nestjs/common';
import axios from "axios";
import { Movie } from "./types";

@Injectable()
export class ImdbService {
  async getTop5ActionMovies(): Promise<Movie[]> {
    const options = {
      method: 'POST',
      url: 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'JdtRPfzFvwDx6Pfc3047xeZlIjQ7BLuF',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
      },
      data: {
        country: {
          anyPrimaryCountries: ['US']
        },
        limit: 10,
        releaseDate: {
          releaseDateRange: {
            end: '2029-12-31',
            start: '2023-01-01'
          }
        },
        userRatings: {
          aggregateRatingRange: {max: 10, min: 0},
          ratingsCountRange: {min: 100}
        },
        genre: {
          allGenreIds: ['Action']
        },
        runtime: {
          runtimeRangeMinutes: {max: 2000, min: 0}
        }
      }
    };
  
    const response = await axios.request(options);

    const movies: Movie[] = [];

    response.data.data.list.map(movie => {
      movies.push({
        title: movie.title.titleText.text,
        rating: movie.title.ratingsSummary.aggregateRating,
      } as Movie);
    });

    return movies;
  }
}


