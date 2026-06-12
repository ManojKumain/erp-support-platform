import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DatabaseHealthService {
  private readonly logger = new Logger(
    DatabaseHealthService.name,
  );

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async verify(): Promise<void> {
    try {
      const result = await this.prisma.$queryRaw<[{ current_database: string }]>`
      SELECT current_database()
    `;

    const databaseName = result[0]?.current_database || 'unknown_db';

    this.logger.log(`Database health verification passed (${databaseName})`);
    } catch (error) {
      this.logger.error('Database health verification failed', error);
      throw error;
    }

  }
}


