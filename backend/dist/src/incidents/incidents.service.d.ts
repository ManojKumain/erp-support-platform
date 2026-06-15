import { PrismaService } from "../prisma/prisma.service";
import { IncidentPriority, IncidentStatus } from "@prisma/client";
export declare class IncidentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.IncidentStatus;
        priority: import("@prisma/client").$Enums.IncidentPriority;
        reporterId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.IncidentStatus;
        priority: import("@prisma/client").$Enums.IncidentPriority;
        reporterId: string;
    } | null>;
    create(data: {
        title: string;
        description: string;
        status: IncidentStatus;
        priority: IncidentPriority;
        organizationId: string;
        reporterId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.IncidentStatus;
        priority: import("@prisma/client").$Enums.IncidentPriority;
        reporterId: string;
    }>;
    update(id: string, data: Partial<{
        title: string;
        description: string;
        status: IncidentStatus;
        priority: IncidentPriority;
    }>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.IncidentStatus;
        priority: import("@prisma/client").$Enums.IncidentPriority;
        reporterId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.IncidentStatus;
        priority: import("@prisma/client").$Enums.IncidentPriority;
        reporterId: string;
    }>;
}
