import { PrismaService } from '../../database/prisma.service';
export declare class DatabaseHealthService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    verify(): Promise<void>;
}
