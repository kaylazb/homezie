-- AlterTable
ALTER TABLE `user` MODIFY `address` VARCHAR(191) NULL,
    MODIFY `birthdate` DATETIME(3) NULL,
    MODIFY `gender` VARCHAR(191) NULL,
    MODIFY `is_verified` BOOLEAN NULL DEFAULT false,
    MODIFY `phone_number` VARCHAR(191) NULL;
