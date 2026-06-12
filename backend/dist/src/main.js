"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
const startup_safety_service_1 = require("./infrastructure/startup/startup-safety.service");
const database_health_service_1 = require("./infrastructure/health/database-health.service");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const startupSafetyService = app.get(startup_safety_service_1.StartupSafetyService);
    startupSafetyService.validate();
    const databaseHealthService = app.get(database_health_service_1.DatabaseHealthService);
    await databaseHealthService.verify();
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get("port") ?? 3000);
    logger.log(`Application startup completed successfully`);
}
bootstrap();
//# sourceMappingURL=main.js.map