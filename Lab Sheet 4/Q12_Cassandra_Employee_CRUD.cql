-- Q12. Cassandra Employee CRUD operations
CREATE KEYSPACE IF NOT EXISTS CompanyDB
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE CompanyDB;
CREATE TABLE IF NOT EXISTS Employees (
  employee_id int PRIMARY KEY,
  name text,
  department text,
  salary int
);
INSERT INTO Employees VALUES (1,'Aman','IT',30000);
INSERT INTO Employees VALUES (2,'Priya','HR',35000);
INSERT INTO Employees VALUES (3,'Rahul','Sales',32000);
SELECT * FROM Employees;
UPDATE Employees SET salary=40000 WHERE employee_id=1;
SELECT * FROM Employees WHERE employee_id=1;
DELETE FROM Employees WHERE employee_id=3;
SELECT * FROM Employees;
