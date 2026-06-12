import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import { StartupSafetyService } from "./infrastructure/startup/startup-safety.service";
import { DatabaseHealthService } from "./infrastructure/health/database-health.service";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const startupSafetyService = app.get(StartupSafetyService);

  startupSafetyService.validate();

  const databaseHealthService = app.get(DatabaseHealthService);

  await databaseHealthService.verify();

  const configService = app.get(ConfigService);

  await app.listen(configService.get<number>("port") ?? 3000);

  logger.log(`Application startup completed successfully`);
}

bootstrap();
