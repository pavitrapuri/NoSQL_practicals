-- Q14. Cassandra consistency levels
CREATE KEYSPACE IF NOT EXISTS ConsistencyDB
WITH replication = {'class':'SimpleStrategy','replication_factor':3};
USE ConsistencyDB;
CREATE TABLE IF NOT EXISTS Students (
  student_id int PRIMARY KEY,
  name text,
  marks int
);
CONSISTENCY ONE;
INSERT INTO Students VALUES (1,'Aarav',85);
SELECT * FROM Students WHERE student_id=1;
CONSISTENCY QUORUM;
SELECT * FROM Students WHERE student_id=1;
CONSISTENCY ALL;
SELECT * FROM Students WHERE student_id=1;
-- QUORUM needs a reachable majority of replicas; ALL needs every replica.
-- With RF=3, ONE=1 replica, QUORUM=2 replicas, ALL=3 replicas.
-- RF=3 requires a cluster with enough nodes for meaningful replica placement.
