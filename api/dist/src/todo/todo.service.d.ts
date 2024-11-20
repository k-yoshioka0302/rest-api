import { PrismaService } from '../prisma/prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(title: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        completed: boolean;
        completedAt: Date | null;
        created_at: Date;
        updatedAt: Date;
    }>;
}
