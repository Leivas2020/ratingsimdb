import { Controller, Get } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Controller()
export class ImdbController {
  constructor(private readonly appService: ImdbService) {}

  @Get("movies")
  public async getMovies() {
    return this.appService.getTop5ActionMovies();
  }
}
