/*
  Warnings:

  - Added the required column `reference` to the `Topup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Withdrawal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Topup` ADD COLUMN `reference` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Withdrawal` ADD COLUMN `reference` VARCHAR(191) NOT NULL;
