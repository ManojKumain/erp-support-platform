import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IncidentPriority, IncidentStatus } from "@prisma/client";

@Injectable()
export class IncidentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.incident.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.incident.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: {
    title: string;
    description: string;
    status: IncidentStatus;
    priority: IncidentPriority;
    organizationId: string;
    reporterId: string;
  }) {
    return this.prisma.incident.create({
      data,
    });
  }

  async update(
    id: string,
    data: Partial<{
      title: string;
      description: string;
      status: IncidentStatus;
      priority: IncidentPriority;
    }>,
  ) {
    return this.prisma.incident.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.incident.delete({
      where: {
        id,
      },
    });
  }
}
