import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StartupSafetyService {
  private readonly logger = new Logger(
    StartupSafetyService.name,
  );

  constructor(
    private readonly configService: ConfigService,
  ) {}

  validate(): void {
    const nodeEnv =
      this.configService.get<string>('nodeEnv');

    const port =
      this.configService.get<number>('port');

    const databaseUrl =
      this.configService.get<string>(
        'database.url',
      );

    if (!nodeEnv) {
      throw new Error(
        'Startup Safety Check Failed: NODE_ENV is missing',
      );
    }

    if (!port) {
      throw new Error(
        'Startup Safety Check Failed: PORT is missing',
      );
    }

    if (!databaseUrl) {
      throw new Error(
        'Startup Safety Check Failed: DATABASE_URL is missing',
      );
    }

    this.logger.log(
      'Startup safety checks passed',
    );
  }
}