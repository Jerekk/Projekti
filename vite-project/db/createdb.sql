CREATE USER 'Jerekk'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON `healthdiary`.* TO 'Jerekk'@'localhost';
FLUSH PRIVILEGES;
