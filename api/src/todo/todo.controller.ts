// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Controller,Get, Body ,Post, Param, NotFoundException, InternalServerErrorException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('todo')
export class TodoController {　

    constructor(
        private prisma: PrismaService
    ) {}

    @Get("list")
    async getList() { 
        const result = await this.prisma.task.findMany({
            where: {
                is_done: false
            }
        })
        return [ 
            ...result
        ]  
    }

    @Post("")
    async add(@Body() task: CreateTaskDto) { 
        const result = await this.prisma.task.create({
            data: task
        })
        return {
            status: "OK"
        }
    }

    @Post(":id/done")
    async done(@Param() param) {
        await this.prisma.task.update({
            data: {
                is_done: true
            },
            where: {
                id: parseInt(param.id)
            }
        })
        return {
            status: "OK",
            param
        }
    }

    // @Post(':id/done')
    // @HttpCode(HttpStatus.OK)
    // async done(@Param('id') id: string): Promise<{ status: string; task: Task }> {
    //     const taskId = parseInt(id, 10);
    //     if (isNaN(taskId)) {
    //         throw new BadRequestException('Invalid task ID');
    //     }

    //     try {
    //         const updatedTask = await this.prisma.task.update({
    //             data: {
    //                 is_done: true,
    //             },
    //             where: {
    //                 id: taskId,
    //             },
    //         });
    //         return {
    //             status: 'OK',
    //             task: updatedTask,
    //         };
    //     } catch (error) {
    //         if (error.code === 'P2025') { // Prismaのレコードが見つからないエラーコード
    //             throw new NotFoundException(`Task with id ${taskId} not found`);
    //         }
    //         throw new InternalServerErrorException('Internal server error');
    //     }
    // }
}