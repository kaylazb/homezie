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
