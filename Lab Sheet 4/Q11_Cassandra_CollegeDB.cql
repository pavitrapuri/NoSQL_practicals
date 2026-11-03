-- Q11. Cassandra keyspace and Students table
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE CollegeDB;
CREATE TABLE IF NOT EXISTS Students (
  student_id int PRIMARY KEY,
  name text,
  course text,
  semester int,
  marks float
);
INSERT INTO Students VALUES (1,'Aarav','BCA',5,85);
INSERT INTO Students VALUES (2,'Riya','BCA',5,91);
INSERT INTO Students VALUES (3,'Karan','BBA',3,78);
INSERT INTO Students VALUES (4,'Neha','BCA',4,88);
INSERT INTO Students VALUES (5,'Arjun','BTech',3,82);
SELECT * FROM Students;
