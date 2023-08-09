"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const imdb_module_1 = require("./imdb.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(imdb_module_1.ImdbModule);
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map