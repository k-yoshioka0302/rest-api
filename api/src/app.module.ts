import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TestControllerController } from './test_controller/test_controller.controller';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController, ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
