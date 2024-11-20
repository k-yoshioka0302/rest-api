/*
  Warnings:

  - You are about to drop the column `due_on` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "due_on",
ADD COLUMN     "completedAt" TIMESTAMP(3);
