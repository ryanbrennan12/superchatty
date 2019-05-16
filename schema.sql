DROP DATABASE IF EXISTS splat;

CREATE DATABASE splat;

USE splat;


CREATE TABLE channels (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(100),
  email varchar(100),
  password varchar(100),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(200),
  user_id int NOT NULL,
  channel_id int NOT NULL,
  PRIMARY KEY (id),
  INDEX (user_id),
  INDEX (channel_id),
  FOREIGN KEY (channel_id) references channels(id),
  FOREIGN KEY (user_id) references users(id)
)  ENGINE=InnoDB;

CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  owner_id int NOT NULL,
  PRIMARY KEY (id),
  INDEX (owner_id),
  FOREIGN KEY (owner_id) references USERS(id)
) ENGINE=InnoDB;




