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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = __importDefault(require("./base.entity"));
const enum_constant_1 = require("../constant/enum.constant");
let USER = class USER extends base_entity_1.default {
    username;
    role;
    email;
    password;
    phone;
    address;
};
exports.USER = USER;
__decorate([
    (0, typeorm_1.Column)({ name: "Name" }),
    __metadata("design:type", String)
], USER.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_constant_1.Role, default: enum_constant_1.Role.USER }),
    __metadata("design:type", String)
], USER.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Email", unique: true }),
    __metadata("design:type", String)
], USER.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "password" }),
    __metadata("design:type", String)
], USER.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Phone" }),
    __metadata("design:type", String)
], USER.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "address" }),
    __metadata("design:type", String)
], USER.prototype, "address", void 0);
exports.USER = USER = __decorate([
    (0, typeorm_1.Entity)("USER")
], USER);
