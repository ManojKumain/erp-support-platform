import { ConfigService } from '@nestjs/config';
export declare class StartupSafetyService {
    private readonly configService;
    private readonly logger;
    constructor(configService: ConfigService);
    validate(): void;
}
