"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log("🌱 Starting database seed...");
    const acme = await prisma.organization.upsert({
        where: {
            name: "Acme Manufacturing",
        },
        update: {},
        create: {
            name: "Acme Manufacturing",
        },
    });
    const globalRetail = await prisma.organization.upsert({
        where: {
            name: "Global Retail",
        },
        update: {},
        create: {
            name: "Global Retail",
        },
    });
    console.log("✅ Organizations seeded");
    const acmeAdmin = await prisma.user.upsert({
        where: {
            email: "admin@acme.com",
        },
        update: {},
        create: {
            email: "admin@acme.com",
            fullName: "Alice Johnson",
            role: "ADMIN",
            organizationId: acme.id,
        },
    });
    const acmeSupport = await prisma.user.upsert({
        where: {
            email: "support@acme.com",
        },
        update: {},
        create: {
            email: "support@acme.com",
            fullName: "Bob Smith",
            role: "SUPPORT_AGENT",
            organizationId: acme.id,
        },
    });
    const acmeEmployee = await prisma.user.upsert({
        where: {
            email: "employee@acme.com",
        },
        update: {},
        create: {
            email: "employee@acme.com",
            fullName: "Charlie Brown",
            role: "EMPLOYEE",
            organizationId: acme.id,
        },
    });
    const globalAdmin = await prisma.user.upsert({
        where: {
            email: "admin@globalretail.com",
        },
        update: {},
        create: {
            email: "admin@globalretail.com",
            fullName: "David Wilson",
            role: "ADMIN",
            organizationId: globalRetail.id,
        },
    });
    const globalSupport = await prisma.user.upsert({
        where: {
            email: "support@globalretail.com",
        },
        update: {},
        create: {
            email: "support@globalretail.com",
            fullName: "Emma Davis",
            role: "SUPPORT_AGENT",
            organizationId: globalRetail.id,
        },
    });
    const globalEmployee = await prisma.user.upsert({
        where: {
            email: "employee@globalretail.com",
        },
        update: {},
        create: {
            email: "employee@globalretail.com",
            fullName: "Frank Miller",
            role: "EMPLOYEE",
            organizationId: globalRetail.id,
        },
    });
    const incident1 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: acme.id,
                title: "ERP Login Failure",
            },
        },
        update: {},
        create: {
            title: "ERP Login Failure",
            description: "Employees are unable to log into the ERP system after the latest deployment.",
            status: "OPEN",
            priority: "P1",
            organizationId: acme.id,
            reporterId: acmeEmployee.id,
        },
    });
    const incident2 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: acme.id,
                title: "Production Order Not Saving",
            },
        },
        update: {},
        create: {
            title: "Production Order Not Saving",
            description: "Production orders fail to save when submitted from the manufacturing module.",
            status: "IN_PROGRESS",
            priority: "P2",
            organizationId: acme.id,
            reporterId: acmeSupport.id,
        },
    });
    const incident3 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: acme.id,
                title: "Inventory Sync Delay",
            },
        },
        update: {},
        create: {
            title: "Inventory Sync Delay",
            description: "Inventory updates are delayed between warehouse and ERP systems.",
            status: "OPEN",
            priority: "P3",
            organizationId: acme.id,
            reporterId: acmeEmployee.id,
        },
    });
    const incident4 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: globalRetail.id,
                title: "POS Integration Failure",
            },
        },
        update: {},
        create: {
            title: "POS Integration Failure",
            description: "Retail point-of-sale transactions are not syncing to ERP.",
            status: "OPEN",
            priority: "P1",
            organizationId: globalRetail.id,
            reporterId: globalEmployee.id,
        },
    });
    const incident5 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: globalRetail.id,
                title: "Sales Report Missing Data",
            },
        },
        update: {},
        create: {
            title: "Sales Report Missing Data",
            description: "Monthly sales reports show incomplete transaction records.",
            status: "IN_PROGRESS",
            priority: "P2",
            organizationId: globalRetail.id,
            reporterId: globalSupport.id,
        },
    });
    const incident6 = await prisma.incident.upsert({
        where: {
            organizationId_title: {
                organizationId: globalRetail.id,
                title: "User Access Permission Issue",
            },
        },
        update: {},
        create: {
            title: "User Access Permission Issue",
            description: "Managers cannot access inventory dashboards after role updates.",
            status: "RESOLVED",
            priority: "P3",
            organizationId: globalRetail.id,
            reporterId: globalAdmin.id,
        },
    });
    console.log({
        acmeAdminId: acmeAdmin.id,
        acmeSupportId: acmeSupport.id,
        acmeEmployeeId: acmeEmployee.id,
        globalAdminId: globalAdmin.id,
        globalSupportId: globalSupport.id,
        globalEmployeeId: globalEmployee.id,
    });
    console.log("✅ Incidents seeded");
    console.log({
        incident1Id: incident1.id,
        incident2Id: incident2.id,
        incident3Id: incident3.id,
        incident4Id: incident4.id,
        incident5Id: incident5.id,
        incident6Id: incident6.id,
    });
}
main()
    .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map