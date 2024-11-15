/*
  Warnings:

  - Added the required column `image_url` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Vehicle` ADD COLUMN `image_url` VARCHAR(512) NOT NULL;
