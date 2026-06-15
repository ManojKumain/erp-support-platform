import { IncidentsService } from "./incidents.service";
export declare class IncidentsController {
    private readonly incidentsService;
    constructor(incidentsService: IncidentsService);
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
    create(body: any): Promise<{
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
    update(id: string, body: any): Promise<{
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
