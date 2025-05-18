/*
  Warnings:

  - You are about to alter the column `type` on the `WalletTransaction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `account_holder_name` VARCHAR(191) NULL,
    ADD COLUMN `account_number` VARCHAR(191) NULL,
    ADD COLUMN `bank_code` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `WalletTransaction` MODIFY `type` ENUM('TOPUP', 'WITHDRAWAL', 'TRANSFER_IN', 'TRANSFER_OUT') NOT NULL;
