import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) { }

    async createTask(title: string) {
        // Prismaを使ってデータベースに新しいタスクを追加
        return await this.prisma.task.create({
            data: {
                title,
                completed: false,
                created_at: new Date(),
            },
        });
    }


}

