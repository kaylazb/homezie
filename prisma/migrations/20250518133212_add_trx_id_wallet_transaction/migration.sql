/*
  Warnings:

  - Added the required column `trx_id` to the `WalletTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WalletTransaction` ADD COLUMN `trx_id` VARCHAR(191) NOT NULL;
