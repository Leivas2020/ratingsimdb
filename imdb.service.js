"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImdbService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ImdbService = exports.ImdbService = class ImdbService {
    async getTop5ActionMovies() {
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
                    aggregateRatingRange: { max: 10, min: 0 },
                    ratingsCountRange: { min: 100 }
                },
                genre: {
                    allGenreIds: ['Action']
                },
                runtime: {
                    runtimeRangeMinutes: { max: 2000, min: 0 }
                }
            }
        };
        const response = await axios_1.default.request(options);
        const movies = [];
        response.data.data.list.map(movie => {
            movies.push({
                title: movie.title.titleText.text,
                rating: movie.title.ratingsSummary.aggregateRating,
            });
        });
        return movies;
    }
};
exports.ImdbService = ImdbService = __decorate([
    (0, common_1.Injectable)()
], ImdbService);
//# sourceMappingURL=imdb.service.js.map