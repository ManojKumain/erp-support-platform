import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";
import { CreateIncidentDto } from "./dto/create-incident.dto";

import { IncidentsService } from "./incidents.service";
import { CurrentUser } from "src/modules/auth/decorators/current-user.decorator";
import type { AuthenticatedUser } from "src/modules/auth/interfaces/authenticated-user.interface";

@UseGuards(JwtAuthGuard)
@Controller("incidents")
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Get()
  async findAll(@CurrentUser() user: AuthenticatedUser) {
    return this.incidentsService.findAll(user.organizationId);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.incidentsService.findOne(id, user.organizationId);
  }

  @Post()
  async create(
    @Body() body: CreateIncidentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.incidentsService.create(body, user);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() body: any,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.incidentsService.update(id, user.organizationId, body);
  }

  @Delete(":id")
async remove(
  @Param("id") id: string,
  @CurrentUser() user: AuthenticatedUser,
) {
  return this.incidentsService.remove(
    id,
    user.organizationId,
  );
}
}
