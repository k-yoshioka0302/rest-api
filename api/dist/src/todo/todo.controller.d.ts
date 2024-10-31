import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
export declare class TodoController {
    private prisma;
    constructor(prisma: PrismaService);
    getList(): Promise<{
        title: string;
        id: number;
        due_on: Date | null;
        is_done: boolean;
    }[]>;
    add(task: CreateTaskDto): Promise<{
        status: string;
    }>;
    done(param: any): Promise<{
        status: string;
        param: any;
    }>;
}
