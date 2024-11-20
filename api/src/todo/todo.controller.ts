// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Controller, Get, Body, Post, Param, Patch, NotFoundException, InternalServerErrorException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {

    constructor(
        //PrismaService をこのクラスに注入しています。
        private readonly prisma: PrismaService,
        //TodoService を注入して、ビジネスロジックを処理します。
        private readonly todoService: TodoService
    ) { }



    //タスク一覧取得　falseのものを取得
    @Get("list")
    async getList() {
        const result = await this.prisma.task.findMany({
            where: {
                completed: false
            }
        });
        return result;
    }

    @Post()
    async addTask(@Body('title') title: string) {
        // タスクを追加するためのリクエストデータをServiceに渡す
        return await this.todoService.createTask(title);
    }

    //タスク作成 (リクエストボディを直接使用)
    @Post("")
    async add(@Body() task: CreateTaskDto) {
        const result = await this.prisma.task.create({
            data: task
        });
        return {
            status: "OK",
            task: result
        };
    }
    // @Post("")
    // async add(@Body() task: CreateTaskDto) {
    //     const result = await this.prisma.task.create({
    //         data: task
    //     });
    //     return {
    //         status: "OK",
    //         task: result
    //     };
    // }
}