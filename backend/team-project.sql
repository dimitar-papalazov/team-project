CREATE DATABASE `team_project` CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `team_project`.`users`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `surname` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `height` FLOAT,
    `weight` FLOAT,
    `age` INT,
    PRIMARY KEY(`id`),
    UNIQUE `users_email`(`email`),
    UNIQUE `users_username`(`username`)
) ENGINE = InnoDB;