import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { IncidentsService } from "./incidents.service";

@Controller("incidents")
export class IncidentsController {
  constructor(
    private readonly incidentsService: IncidentsService,
  ) {}

  @Get()
  async findAll() {
    return this.incidentsService.findAll();
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
  ) {
    return this.incidentsService.findOne(id);
  }

  @Post()
  async create(
    @Body() body: any,
  ) {
    return this.incidentsService.create(body);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() body: any,
  ) {
    return this.incidentsService.update(
      id,
      body,
    );
  }

  @Delete(":id")
  async remove(
    @Param("id") id: string,
  ) {
    return this.incidentsService.remove(id);
  }
}