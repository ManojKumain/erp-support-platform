import { Module } from "@nestjs/common";
import { IncidentsService } from "./incidents.service";
import { IncidentsController } from "./incidents.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "src/modules/auth/auth.module";

@Module({
  imports: [
    PrismaModule,
    AuthModule, // 🔥 THIS IS THE KEY FIX
  ],
  controllers: [IncidentsController],
  providers: [IncidentsService],
})
export class IncidentsModule {}