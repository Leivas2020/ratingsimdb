import { ImdbService } from './imdb.service';
export declare class ImdbController {
    private readonly appService;
    constructor(appService: ImdbService);
    getMovies(): Promise<import("./types").Movie[]>;
}
