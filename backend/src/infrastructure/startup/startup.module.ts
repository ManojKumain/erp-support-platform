import { Module } from '@nestjs/common';

import { StartupSafetyService } from './startup-safety.service';

@Module({
  providers: [StartupSafetyService],
  exports: [StartupSafetyService],
})
export class StartupModule {}