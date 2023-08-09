import { Injectable } from "@nestjs/common";
import axios, { AxiosRequestConfig } from "axios"; 
import { Rating } from "./rate";

@Injectable()
export class imdbratings {
  async getTop5Ratings(): Promise<Rating[]> {
    const options: AxiosRequestConfig = {
      method: 'POST', 
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {
        s: 'Avengers Endgame',
        r: 'json',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'fd4e5f56e1msh2f148aee3023889p194f81jsnde8c3fd13347',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(options);

      const top5Ratings: Rating[] = response.data.data.list.map((movie: any) => ({
        title: movie.title.titleText.text,
        rating: movie.ratingsSummary.aggregateRating,
      }));

      return top5Ratings;
    } catch (error) {
      console.error("Error fetching top 5 ratings:", error);
      throw error;
    }
  }
}
