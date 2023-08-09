import { Test, TestingModule } from '@nestjs/testing';
import { ImdbService } from './imdb.service';

describe('AppController', () => {
  let imdbService: ImdbService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImdbService],
      providers: [ImdbService],
    }).compile();

    imdbService = app.get<ImdbService>(ImdbService);
  });

  describe('root', () => {
    it('return movies', done => {
      imdbService.getTop5ActionMovies()
        .then(movies => {
          expect(movies.length>0).toBeTruthy();
          expect(movies[0].title).toBeDefined();
          expect(movies[0].rating).toBeDefined();
          done();
        });
    })
  });
});
