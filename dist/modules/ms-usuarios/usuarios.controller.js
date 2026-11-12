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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let UsuariosController = class UsuariosController {
    constructor(httpService) {
        this.httpService = httpService;
        this.usuariosServiceUrl = 'http://localhost:3000/usuarios';
    }
    async obtenerUsuarios() {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.usuariosServiceUrl));
        return data;
    }
    async obtenerUsuarioPorId(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.usuariosServiceUrl}/${id}`));
        return data;
    }
    async crearUsuario(body) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.usuariosServiceUrl, body));
        return data;
    }
    async actualizarUsuario(id, body) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.patch(`${this.usuariosServiceUrl}/${id}`, body));
        return data;
    }
    async eliminarUsuario(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.delete(`${this.usuariosServiceUrl}/${id}`));
        return data;
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerUsuarios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerUsuarioPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "crearUsuario", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "actualizarUsuario", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminarUsuario", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map