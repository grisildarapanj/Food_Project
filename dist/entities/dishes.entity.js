"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dishes = void 0;
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./comments.entity");
const products_entity_1 = require("./products.entity");
let Dishes = class Dishes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dishes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dish_name', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Dishes.prototype, "dish_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'preparation_desc', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Dishes.prototype, "preparation_desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Dishes.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.Comments, comments => comments.dishes),
    __metadata("design:type", Array)
], Dishes.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rating', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Dishes.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => products_entity_1.Products),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Dishes.prototype, "products", void 0);
Dishes = __decorate([
    (0, typeorm_1.Entity)()
], Dishes);
exports.Dishes = Dishes;
//# sourceMappingURL=dishes.entity.js.map