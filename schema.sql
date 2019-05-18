DROP DATABASE IF EXISTS splat;

CREATE DATABASE splat;

USE splat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(100),
  email varchar(100),
  password varchar(100),
  PRIMARY KEY (id)
) ENGINE=InnoDB;


CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  owner_id int NOT NULL,
  PRIMARY KEY (id),
  INDEX (owner_id),
  FOREIGN KEY (owner_id) references USERS(id)
) ENGINE=InnoDB;

CREATE TABLE channels (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  team_id int NOT NULL,
  PRIMARY KEY (id),
  INDEX (team_id),
  FOREIGN KEY (team_id) references TEAMS(id)
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

INSERT INTO users (username, email, password) VALUES ('baconlollipops', 'ryansbrennan444@gmail.com', 'Taylor12');
INSERT INTO users (username, email, password) VALUES ('mishka', 'michellesuplick@gmail.com', 'Elizabthe12');
INSERT INTO users (username, email, password) VALUES ('ashleybear', 'ashley@gmail.com', 'nobiggie!');

INSERT INTO teams (name, owner_id)  VALUES ('GoChargersGo', 3);
INSERT INTO teams (name, owner_id)  VALUES ('GoBirds', 2);
INSERT INTO teams (name, owner_id)  VALUES ('BearsWin', 2);

INSERT INTO channels (name, team_id)  VALUES ('Channel1', 1);
INSERT INTO channels (name, team_id)  VALUES ('Channel2', 1);
INSERT INTO channels (name, team_id)  VALUES ('Channel3', 2);


INSERT INTO messages (text, user_id, channel_id) VALUES ('whatcha up to?', 1, 2);
INSERT INTO messages (text, user_id, channel_id) VALUES ('nothing right now', 2, 2);
INSERT INTO messages (text, user_id, channel_id) VALUES ('go birds?', 3, 1);
INSERT INTO messages (text, user_id, channel_id) VALUES ('ok np?', 2, 3);


