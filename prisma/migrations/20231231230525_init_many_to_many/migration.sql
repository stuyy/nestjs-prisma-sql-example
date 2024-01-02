-- CreateTable
CREATE TABLE `GroupPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserOnGroupPosts` (
    `userId` INTEGER NOT NULL,
    `groupPostId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `groupPostId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserOnGroupPosts` ADD CONSTRAINT `UserOnGroupPosts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserOnGroupPosts` ADD CONSTRAINT `UserOnGroupPosts_groupPostId_fkey` FOREIGN KEY (`groupPostId`) REFERENCES `GroupPost`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
