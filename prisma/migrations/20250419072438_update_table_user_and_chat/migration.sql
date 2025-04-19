/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `bookingId` on the `BookingSeat` table. All the data in the column will be lost.
  - You are about to drop the column `seatNumber` on the `BookingSeat` table. All the data in the column will be lost.
  - You are about to drop the column `busClassId` on the `Bus` table. All the data in the column will be lost.
  - You are about to drop the column `bookingId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `busId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `routeId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Topup` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Topup` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to drop the column `userId` on the `Wallet` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `WalletTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `walletId` on the `WalletTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `accountNumber` on the `Withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `bankCode` on the `Withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Withdrawal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[booking_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `schedule_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `booking_id` to the `BookingSeat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_number` to the `BookingSeat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bus_class_id` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `booking_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bus_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `route_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Topup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet_id` to the `WalletTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_number` to the `Withdrawal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_code` to the `Withdrawal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Withdrawal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_scheduleId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_userId_fkey`;

-- DropForeignKey
ALTER TABLE `BookingSeat` DROP FOREIGN KEY `BookingSeat_bookingId_fkey`;

-- DropForeignKey
ALTER TABLE `Bus` DROP FOREIGN KEY `Bus_busClassId_fkey`;

-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_bookingId_fkey`;

-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_busId_fkey`;

-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_routeId_fkey`;

-- DropForeignKey
ALTER TABLE `Topup` DROP FOREIGN KEY `Topup_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Wallet` DROP FOREIGN KEY `Wallet_userId_fkey`;

-- DropForeignKey
ALTER TABLE `WalletTransaction` DROP FOREIGN KEY `WalletTransaction_walletId_fkey`;

-- DropForeignKey
ALTER TABLE `Withdrawal` DROP FOREIGN KEY `Withdrawal_userId_fkey`;

-- DropIndex
DROP INDEX `Booking_scheduleId_fkey` ON `Booking`;

-- DropIndex
DROP INDEX `Booking_userId_fkey` ON `Booking`;

-- DropIndex
DROP INDEX `BookingSeat_bookingId_fkey` ON `BookingSeat`;

-- DropIndex
DROP INDEX `Bus_busClassId_fkey` ON `Bus`;

-- DropIndex
DROP INDEX `Payment_bookingId_key` ON `Payment`;

-- DropIndex
DROP INDEX `Schedule_busId_fkey` ON `Schedule`;

-- DropIndex
DROP INDEX `Schedule_routeId_fkey` ON `Schedule`;

-- DropIndex
DROP INDEX `Topup_userId_fkey` ON `Topup`;

-- DropIndex
DROP INDEX `Wallet_userId_key` ON `Wallet`;

-- DropIndex
DROP INDEX `WalletTransaction_walletId_fkey` ON `WalletTransaction`;

-- DropIndex
DROP INDEX `Withdrawal_userId_fkey` ON `Withdrawal`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `createdAt`,
    DROP COLUMN `scheduleId`,
    DROP COLUMN `totalAmount`,
    DROP COLUMN `userId`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `schedule_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `total_amount` INTEGER NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `BookingSeat` DROP COLUMN `bookingId`,
    DROP COLUMN `seatNumber`,
    ADD COLUMN `booking_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `seat_number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Bus` DROP COLUMN `busClassId`,
    ADD COLUMN `bus_class_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `bookingId`,
    DROP COLUMN `createdAt`,
    ADD COLUMN `booking_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Schedule` DROP COLUMN `busId`,
    DROP COLUMN `routeId`,
    ADD COLUMN `bus_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `route_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Topup` DROP COLUMN `createdAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `blocked_until` DATETIME(3) NULL,
    ADD COLUMN `device_id` VARCHAR(191) NULL,
    ADD COLUMN `device_type` VARCHAR(191) NULL,
    ADD COLUMN `fcm_token` VARCHAR(191) NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `last_ip` VARCHAR(191) NULL,
    ADD COLUMN `last_location` VARCHAR(191) NULL,
    ADD COLUMN `last_login` DATETIME(3) NULL,
    ADD COLUMN `login_attempts` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_picture` VARCHAR(191) NULL,
    ADD COLUMN `socket_id` VARCHAR(191) NULL,
    ADD COLUMN `verification_token` VARCHAR(191) NULL,
    MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE `Wallet` DROP COLUMN `userId`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `WalletTransaction` DROP COLUMN `createdAt`,
    DROP COLUMN `walletId`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `wallet_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Withdrawal` DROP COLUMN `accountNumber`,
    DROP COLUMN `bankCode`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `account_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `bank_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Chat` (
    `id` VARCHAR(191) NOT NULL,
    `sender_id` VARCHAR(191) NOT NULL,
    `receiver_id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_read` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoom` (
    `id` VARCHAR(191) NOT NULL,
    `user_id1` VARCHAR(191) NOT NULL,
    `user_id2` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoomMessage` (
    `id` VARCHAR(191) NOT NULL,
    `room_id` VARCHAR(191) NOT NULL,
    `sender_id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_read` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Payment_booking_id_key` ON `Payment`(`booking_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Wallet_user_id_key` ON `Wallet`(`user_id`);

-- AddForeignKey
ALTER TABLE `Wallet` ADD CONSTRAINT `Wallet_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WalletTransaction` ADD CONSTRAINT `WalletTransaction_wallet_id_fkey` FOREIGN KEY (`wallet_id`) REFERENCES `Wallet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Topup` ADD CONSTRAINT `Topup_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Withdrawal` ADD CONSTRAINT `Withdrawal_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bus` ADD CONSTRAINT `Bus_bus_class_id_fkey` FOREIGN KEY (`bus_class_id`) REFERENCES `BusClass`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_bus_id_fkey` FOREIGN KEY (`bus_id`) REFERENCES `Bus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_route_id_fkey` FOREIGN KEY (`route_id`) REFERENCES `Route`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_schedule_id_fkey` FOREIGN KEY (`schedule_id`) REFERENCES `Schedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingSeat` ADD CONSTRAINT `BookingSeat_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_sender_id_fkey` FOREIGN KEY (`sender_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_receiver_id_fkey` FOREIGN KEY (`receiver_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoom` ADD CONSTRAINT `ChatRoom_user_id1_fkey` FOREIGN KEY (`user_id1`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoom` ADD CONSTRAINT `ChatRoom_user_id2_fkey` FOREIGN KEY (`user_id2`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomMessage` ADD CONSTRAINT `ChatRoomMessage_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `ChatRoom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomMessage` ADD CONSTRAINT `ChatRoomMessage_sender_id_fkey` FOREIGN KEY (`sender_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
