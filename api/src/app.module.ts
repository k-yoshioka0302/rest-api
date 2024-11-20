import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TestControllerController } from './test_controller/test_controller.controller';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service'; 
import { PrismaService } from './prisma/prisma.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController, TodoController, ],
  providers: [TodoService,AppService, PrismaService],
})
export class AppModule {}
