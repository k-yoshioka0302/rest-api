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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_task_dto_1 = require("./create-task.dto");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(prisma, todoService) {
        this.prisma = prisma;
        this.todoService = todoService;
    }
    async getList() {
        const result = await this.prisma.task.findMany({
            where: {
                completed: {
                    equals: false
                }
            }
        });
        return result;
    }
    async addTask(title) {
        return await this.todoService.createTask(title);
    }
    async add(task) {
        const result = await this.prisma.task.create({
            data: task
        });
        return {
            status: "OK",
            task: result
        };
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)("list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "addTask", null);
__decorate([
    (0, common_1.Post)(""),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "add", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map