CREATE DATABASE `team_project` CHARACTER SET utf8 COLLATE utf8_general_ci; CREATE TABLE `team_project`.`users`(
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

CREATE TABLE `team_project`.`exercises`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `sets` INT NOT NULL,
    `intensity` INT NULL,
    `goal_reps` INT NULL,
    `goal_time` INT NULL,
    `goal_distance` INT NULL,
    `goal_weight` INT NULL,
    `url` VARCHAR(1023) NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB; 

CREATE TABLE `team_project`.`workouts`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB; 

CREATE TABLE `team_project`.`plans`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB; 

CREATE TABLE `team_project`.`progresses`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `value` INT NOT NULL,
    `date` BIGINT NOT NULL,
    `type` INT NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB; 

CREATE TABLE `team_project`.`users_exercises`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `exercise_id` INT NOT NULL,
    PRIMARY KEY(`id`, `user_id`, `exercise_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `users_exercises` ADD CONSTRAINT `users_exercises_user_id` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `users_exercises` ADD CONSTRAINT `users_exercises_exercise_id` FOREIGN KEY(`exercise_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`users_workouts`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `workout_id` INT NOT NULL,
    PRIMARY KEY(`id`, `user_id`, `workout_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `users_workouts` ADD CONSTRAINT `users_workouts_user_id` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `users_workouts` ADD CONSTRAINT `users_workouts_workout_id` FOREIGN KEY(`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`users_plans`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `plan_id` INT NOT NULL,
    PRIMARY KEY(`id`, `user_id`, `plan_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `users_plans` ADD CONSTRAINT `users_plans_user_id` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `users_plans` ADD CONSTRAINT `users_plans_plan_id` FOREIGN KEY(`plan_id`) REFERENCES `plans`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`users_progresses`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `progress_id` INT NOT NULL,
    PRIMARY KEY(`id`, `user_id`, `progress_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `users_progresses` ADD CONSTRAINT `users_progresses_user_id` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `users_progresses` ADD CONSTRAINT `users_progresses_progress_id` FOREIGN KEY(`progress_id`) REFERENCES `progresses`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`exercises_workouts`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `exercise_id` INT NOT NULL,
    `workout_id` INT NOT NULL,
    PRIMARY KEY(`id`, `exercise_id`, `workout_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `exercises_workouts` ADD CONSTRAINT `exercises_workouts_exercise_id` FOREIGN KEY(`exercise_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `exercises_workouts` ADD CONSTRAINT `exercises_workouts_workout_id` FOREIGN KEY(`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`workouts_plans`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `workout_id` INT NOT NULL,
    `plan_id` INT NOT NULL,
    PRIMARY KEY(`id`, `workout_id`, `plan_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `workouts_plans` ADD CONSTRAINT `workouts_plans_workout_id` FOREIGN KEY(`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `workouts_plans` ADD CONSTRAINT `workouts_plans_plan_id` FOREIGN KEY(`plan_id`) REFERENCES `plans`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE `team_project`.`exercises_progresses`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `exercise_id` INT NOT NULL,
    `progress_id` INT NOT NULL,
    PRIMARY KEY(`id`, `exercise_id`, `progress_id`)
) ENGINE = InnoDB; 

ALTER TABLE
    `exercises_progresses` ADD CONSTRAINT `exercises_progresses_exercise_id` FOREIGN KEY(`exercise_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE
    `exercises_progresses` ADD CONSTRAINT `exercises_progresses_progress_id` FOREIGN KEY(`progress_id`) REFERENCES `progresses`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;