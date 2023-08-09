import { Test, TestingModule } from '@nestjs/testing';
import { imdbratings } from './imdb.ratings';

describe('AppController', () => {
  let imdbratings: imdbratings;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
    //  controllers: [imd.bratings],
    //  providers: [imdb.ratings],
    }).compile();

   // imdbratings = app.get<imdbratings>(imdb.ratings);
  });

  describe('root', () => {
    it('return ratings', done => {
      imdbratings.getTop5Ratings()
        .then(String => {
          expect(String.length>0).toBeTruthy();
          expect(Number[0].rating).toBeDefined();
          done();
        });
    });
  });
});
