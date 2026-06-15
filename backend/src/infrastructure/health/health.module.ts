import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';

import { DatabaseHealthService } from './database-health.service';

@Module({
  imports: [PrismaModule],

  providers: [DatabaseHealthService],

  exports: [DatabaseHealthService],
})
export class HealthModule {}