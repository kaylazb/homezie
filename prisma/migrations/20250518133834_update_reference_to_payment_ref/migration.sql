/*
  Warnings:

  - You are about to drop the column `reference` on the `WalletTransaction` table. All the data in the column will be lost.
  - Added the required column `payment_ref` to the `WalletTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WalletTransaction` DROP COLUMN `reference`,
    ADD COLUMN `payment_ref` VARCHAR(191) NOT NULL;
