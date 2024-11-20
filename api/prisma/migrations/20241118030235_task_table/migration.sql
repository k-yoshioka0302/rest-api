/*
  Warnings:

  - You are about to drop the column `due_on` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `is_done` on the `Task` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Task_title_key";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "due_on",
DROP COLUMN "is_done",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
