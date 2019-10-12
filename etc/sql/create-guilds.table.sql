CREATE TABLE `serium`.`guilds` ( `idx` INT(11) NOT NULL AUTO_INCREMENT , `identify` VARCHAR(32) NOT NULL , `prefix` VARCHAR(2048) NOT NULL , PRIMARY KEY (`idx`), UNIQUE (`identify`)) ENGINE = InnoDB;
