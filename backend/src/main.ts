import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DataSource } from 'typeorm';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe({
		transform: true,
	}));
	app.enableCors({
		origin: 'http://localhost:8082', // ton frontend
		methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
		credentials: true,
	});

	const configService = app.get(ConfigService);

	const port = configService.get<number>('PORT') || 8081;
	await app.listen(port);

	const dataSource = app.get(DataSource);
	if (dataSource.isInitialized) {
		console.log('Database connected');
	}

	console.log(`Server running on http://localhost:${port}`);
}

bootstrap();
