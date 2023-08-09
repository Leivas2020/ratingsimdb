"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imdbratings = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let imdbratings = exports.imdbratings = class imdbratings {
    async getTop5Ratings() {
        const options = {
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
            const response = await axios_1.default.request(options);
            const top5Ratings = response.data.data.list.map((movie) => ({
                title: movie.title.titleText.text,
                rating: movie.ratingsSummary.aggregateRating,
            }));
            return top5Ratings;
        }
        catch (error) {
            console.error("Error fetching top 5 ratings:", error);
            throw error;
        }
    }
};
exports.imdbratings = imdbratings = __decorate([
    (0, common_1.Injectable)()
], imdbratings);
//# sourceMappingURL=imdb.ratings.js.map