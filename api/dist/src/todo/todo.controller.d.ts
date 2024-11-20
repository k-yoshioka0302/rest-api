import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly prisma;
    private readonly todoService;
    constructor(prisma: PrismaService, todoService: TodoService);
    getList(): Promise<{
        id: number;
        title: string;
        completed: boolean;
        created_at: Date;
    }[]>;
    addTask(title: string): Promise<{
        id: number;
        title: string;
        completed: boolean;
        created_at: Date;
    }>;
    add(task: CreateTaskDto): Promise<{
        status: string;
        task: {
            id: number;
            title: string;
            completed: boolean;
            created_at: Date;
        };
    }>;
}
