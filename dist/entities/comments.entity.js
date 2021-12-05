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
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
const dishes_entity_1 = require("./dishes.entity");
let Comments = class Comments {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comment', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Comments.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dishes_entity_1.Dishes, dishes => dishes.comments),
    __metadata("design:type", dishes_entity_1.Dishes)
], Comments.prototype, "dishes", void 0);
Comments = __decorate([
    (0, typeorm_1.Entity)()
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=comments.entity.js.map