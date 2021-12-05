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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesController = void 0;
const common_1 = require("@nestjs/common");
const dishes_service_1 = require("./dishes.service");
const dishes_entity_1 = require("../entities/dishes.entity");
let DishesController = class DishesController {
    constructor(dishesService) {
        this.dishesService = dishesService;
    }
    read() {
        return this.dishesService.readAll();
    }
    async create(dishes) {
        return this.dishesService.create(dishes);
    }
    async update(id, dishes) {
        dishes.id = Number(id);
        return this.dishesService.update(dishes);
    }
    async delete(id) {
        return this.dishesService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "read", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dishes_entity_1.Dishes]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dishes_entity_1.Dishes]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "delete", null);
DishesController = __decorate([
    (0, common_1.Controller)('dishes'),
    __metadata("design:paramtypes", [dishes_service_1.DishesService])
], DishesController);
exports.DishesController = DishesController;
//# sourceMappingURL=dishes.controller.js.map