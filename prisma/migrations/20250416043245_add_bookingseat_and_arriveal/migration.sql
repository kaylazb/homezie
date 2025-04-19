/*
  Warnings:

  - You are about to drop the column `seatNumber` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `totalAmount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrival` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `seatNumber`,
    ADD COLUMN `totalAmount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Schedule` ADD COLUMN `arrival` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `BookingSeat` (
    `id` VARCHAR(191) NOT NULL,
    `bookingId` VARCHAR(191) NOT NULL,
    `seatNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookingSeat` ADD CONSTRAINT `BookingSeat_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
