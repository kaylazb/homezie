/*
  Warnings:

  - You are about to alter the column `price` on the `House` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(15,2)`.

*/
-- AlterTable
ALTER TABLE `House` MODIFY `price` DECIMAL(15, 2) NOT NULL;
