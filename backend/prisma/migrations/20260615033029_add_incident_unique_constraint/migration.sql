/*
  Warnings:

  - A unique constraint covering the columns `[organizationId,title]` on the table `Incident` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Incident_organizationId_title_key" ON "Incident"("organizationId", "title");
