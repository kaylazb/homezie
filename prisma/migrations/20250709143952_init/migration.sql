-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(36) NOT NULL,
    `name` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` TEXT NOT NULL,
    `phone_number` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` TEXT NULL DEFAULT 'SYSTEM',
    `failed_password` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `House` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `land_area` INTEGER NOT NULL,
    `building_area` INTEGER NOT NULL,
    `bedrooms` INTEGER NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `longtitude` DECIMAL(9, 6) NULL,
    `latitude` DECIMAL(9, 6) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chart` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ahp_preferences` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChartHouse` (
    `id` VARCHAR(191) NOT NULL,
    `chart_id` VARCHAR(191) NOT NULL,
    `house_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChartHouse` ADD CONSTRAINT `ChartHouse_chart_id_fkey` FOREIGN KEY (`chart_id`) REFERENCES `Chart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChartHouse` ADD CONSTRAINT `ChartHouse_house_id_fkey` FOREIGN KEY (`house_id`) REFERENCES `House`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
