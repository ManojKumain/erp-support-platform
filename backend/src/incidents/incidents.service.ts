import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IncidentPriority, IncidentStatus } from "@prisma/client";
import { NotFoundException } from "@nestjs/common";
import { CreateIncidentDto } from "./dto/create-incident.dto";
import type { AuthenticatedUser } from "src/modules/auth/interfaces/authenticated-user.interface";

@Injectable()
export class IncidentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(organizationId: string) {
    return this.prisma.incident.findMany({
      where: {
        organizationId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findOne(id: string, organizationId: string) {
    const incident = await this.prisma.incident.findFirst({
      where: {
        id,
        organizationId,
      },
    });

    if (!incident) {
      throw new NotFoundException("Incident not found");
    }

    return incident;
  }

  async create(data: CreateIncidentDto, user: AuthenticatedUser) {
    return this.prisma.incident.create({
      data: {
        title: data.title,
        description: data.description,
        priority: data.priority,

        status: "OPEN",

        organizationId: user.organizationId,
        reporterId: user.sub,
      },
    });
  }

  async update(
    id: string,
    organizationId: string,
    data: Partial<{
      title: string;
      description: string;
      status: IncidentStatus;
      priority: IncidentPriority;
    }>,
  ) {
    const incident = await this.prisma.incident.findFirst({
      where: {
        id,
        organizationId,
      },
    });

    if (!incident) {
      throw new NotFoundException("Incident not found");
    }

    return this.prisma.incident.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string, organizationId: string) {
    const incident = await this.prisma.incident.findFirst({
      where: {
        id,
        organizationId,
      },
    });

    if (!incident) {
      throw new NotFoundException("Incident not found");
    }

    return this.prisma.incident.delete({
      where: {
        id,
      },
    });
  }
}
