import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const hash = async (password: string) => {
    return bcrypt.hash(password, 10);
  };
  console.log("🌱 Starting database seed...");

  const acmeAdminPassword = await hash("admin123");
  const acmeSupportPassword = await hash("agent123");
  const acmeEmployeePassword = await hash("employee123");

  const globalAdminPassword = await hash("adminagr123");
  const globalSupportPassword = await hash("agentsgr123");
  const globalEmployeePassword = await hash("employeegr123");

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
    update: {
      fullName: "Alice Johnson",
      role: "ADMIN",
      organizationId: acme.id,
      password: acmeAdminPassword,
    },
    create: {
      email: "admin@acme.com",
      fullName: "Alice Johnson",
      role: "ADMIN",
      organizationId: acme.id,
      password: acmeAdminPassword,
    },
  });

  const acmeSupport = await prisma.user.upsert({
    where: {
      email: "support@acme.com",
    },
    update: {
      fullName: "Bob Smith",
      role: "SUPPORT_AGENT",
      organizationId: acme.id,
      password: acmeSupportPassword,
    },
    create: {
      email: "support@acme.com",
      fullName: "Bob Smith",
      role: "SUPPORT_AGENT",
      organizationId: acme.id,
      password: acmeSupportPassword,
    },
  });

  const acmeEmployee = await prisma.user.upsert({
    where: {
      email: "employee@acme.com",
    },
    update: {
      fullName: "Charlie Brown",
      role: "EMPLOYEE",
      organizationId: acme.id,
      password: acmeEmployeePassword,
    },
    create: {
      email: "employee@acme.com",
      fullName: "Charlie Brown",
      role: "EMPLOYEE",
      organizationId: acme.id,
      password: acmeEmployeePassword,
    },
  });

  const globalAdmin = await prisma.user.upsert({
    where: {
      email: "admin@globalretail.com",
    },
    update: {
      fullName: "David Wilson",
      role: "ADMIN",
      organizationId: globalRetail.id,
      password: globalAdminPassword,
    },
    create: {
      email: "admin@globalretail.com",
      fullName: "David Wilson",
      role: "ADMIN",
      organizationId: globalRetail.id,
      password: globalAdminPassword,
    },
  });

  const globalSupport = await prisma.user.upsert({
    where: {
      email: "support@globalretail.com",
    },
    update: {
      fullName: "Emma Davis",
      role: "SUPPORT_AGENT",
      organizationId: globalRetail.id,
      password: globalSupportPassword,
    },
    create: {
      email: "support@globalretail.com",
      fullName: "Emma Davis",
      role: "SUPPORT_AGENT",
      organizationId: globalRetail.id,
      password: globalSupportPassword,
    },
  });

  const globalEmployee = await prisma.user.upsert({
    where: {
      email: "employee@globalretail.com",
    },
    update: {
      fullName: "Frank Miller",
      role: "EMPLOYEE",
      organizationId: globalRetail.id,
      password: globalEmployeePassword,
    },
    create: {
      email: "employee@globalretail.com",
      fullName: "Frank Miller",
      role: "EMPLOYEE",
      organizationId: globalRetail.id,
      password: globalEmployeePassword,
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
      description:
        "Employees are unable to log into the ERP system after the latest deployment.",
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
      description:
        "Production orders fail to save when submitted from the manufacturing module.",
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
      description:
        "Inventory updates are delayed between warehouse and ERP systems.",
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
      description:
        "Managers cannot access inventory dashboards after role updates.",
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
