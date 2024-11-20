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
        origin: (origin, callback) => {
            callback(null, true); // 全てのオリジンを許可
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true, // クッキーや認証情報を許可
    });


    await app.listen(3001);
}
bootstrap();