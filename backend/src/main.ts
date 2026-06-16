import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import { StartupSafetyService } from "./infrastructure/startup/startup-safety.service";
import { DatabaseHealthService } from "./infrastructure/health/database-health.service";
import { Logger } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("Bootstrap");
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const startupSafetyService = app.get(StartupSafetyService);

  startupSafetyService.validate();

  const databaseHealthService = app.get(DatabaseHealthService);

  await databaseHealthService.verify();

  const configService = app.get(ConfigService);

  const port = configService.get<number>("port") ?? 3000;

  logger.log(`Port resolved to: ${port}`);

  await app.listen(port);

  // await app.listen(configService.get<number>("port") ?? 3000);

  logger.log(`Application startup completed successfully`);
}

bootstrap();
