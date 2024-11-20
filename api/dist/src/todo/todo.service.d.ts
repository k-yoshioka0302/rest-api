import { PrismaService } from '../prisma/prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(title: string): Promise<{
        title: string;
        completed: boolean;
        created_at: Date;
        id: number;
    }>;
}
