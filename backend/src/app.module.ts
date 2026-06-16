import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StartupModule } from './infrastructure/startup/startup.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './infrastructure/health/health.module';
import { IncidentsModule } from './incidents/incidents.module';
import {
  configuration,
  envValidationSchema,
} from './config';
import { AuthModule } from './modules/auth/auth.module';

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

    StartupModule,

    IncidentsModule,

    AuthModule
  ],
})
export class AppModule {}