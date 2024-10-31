import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            //options here
        }),
    );

    app.enableCors({
        origin: ['http://localhost:3000', 'http://rest-api-0hhj.onrender.com'], // フロントエンドのオリジン
　　　　        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true, // クッキーや認証情報を許可する場合
    });

    await app.listen(3001);
}
bootstrap();
