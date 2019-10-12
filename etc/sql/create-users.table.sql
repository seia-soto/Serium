CREATE TABLE `serium`.`users` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `identify` VARCHAR(32) NOT NULL , `language` VARCHAR(2) NOT NULL , PRIMARY KEY (`idx`), UNIQUE (`identify`)) ENGINE = InnoDB;
