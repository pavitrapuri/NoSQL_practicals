CREATE DATABASE IF NOT EXISTS StudentRDB;
USE StudentRDB;
CREATE TABLE IF NOT EXISTS Student(Student_ID INT PRIMARY KEY, Name VARCHAR(50), Course VARCHAR(30), Semester INT, Marks DECIMAL(5,2));
INSERT INTO Student VALUES
(1,'Aarav','BCA',5,85),(2,'Riya','BCA',5,91),(3,'Karan','BBA',3,78),(4,'Neha','BCA',4,88),(5,'Arjun','BTech',3,82);
SELECT * FROM Student;
