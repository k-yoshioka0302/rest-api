import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaService } from '../prisma/prisma.service'; // PrismaService を直接インポート

@Module({
    controllers: [TodoController],
    providers: [TodoService, PrismaService], // PrismaService をプロバイダーに追加
})
export class TodoModule { }