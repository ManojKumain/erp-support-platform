import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StartupModule } from './infrastructure/startup/startup.module';
import { PrismaModule } from './database/prisma.module';
import { HealthModule } from './infrastructure/health/health.module';

import {
  configuration,
  envValidationSchema,
} from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

      load: [configuration],

      validationSchema: envValidationSchema,

      validationOptions: {
        abortEarly: false,
      },
    }),

    PrismaModule,

    HealthModule,

    StartupModule
  ],
})
export class AppModule {}