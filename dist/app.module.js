"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_entity_1 = require("./entities/products.entity");
const dishes_entity_1 = require("./entities/dishes.entity");
const comments_entity_1 = require("./entities/comments.entity");
const comments_service_1 = require("./comments/comments.service");
const comments_controller_1 = require("./comments/comments.controller");
const dishes_service_1 = require("./dishes/dishes.service");
const dishes_controller_1 = require("./dishes/dishes.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                username: 'root',
                password: 'root',
                database: 'food_project',
                entities: [
                    products_entity_1.Products, dishes_entity_1.Dishes, comments_entity_1.Comments
                ],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([comments_entity_1.Comments, dishes_entity_1.Dishes]),
        ],
        controllers: [app_controller_1.AppController, comments_controller_1.CommentsController, dishes_controller_1.DishesController],
        providers: [app_service_1.AppService, comments_service_1.CommentsService, dishes_service_1.DishesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map