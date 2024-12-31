/*
  Warnings:

  - You are about to drop the column `projectId` on the `Logo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Logo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Logo" ("id", "url") SELECT "id", "url" FROM "Logo";
DROP TABLE "Logo";
ALTER TABLE "new_Logo" RENAME TO "Logo";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoId" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Project_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "Logo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("description", "id", "name", "published") SELECT "description", "id", "name", "published" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_logoId_key" ON "Project"("logoId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
