import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly prisma;
    private readonly todoService;
    constructor(prisma: PrismaService, todoService: TodoService);
    getList(): Promise<{
        title: string;
        completed: boolean;
        created_at: Date;
        id: number;
    }[]>;
    addTask(title: string): Promise<{
        title: string;
        completed: boolean;
        created_at: Date;
        id: number;
    }>;
    add(task: CreateTaskDto): Promise<{
        status: string;
        task: {
            title: string;
            completed: boolean;
            created_at: Date;
            id: number;
        };
    }>;
}
