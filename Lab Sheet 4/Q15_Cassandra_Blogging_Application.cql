-- Q15. Column-oriented Blogging Platform using Cassandra
CREATE KEYSPACE IF NOT EXISTS BlogDB
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE BlogDB;
CREATE TABLE IF NOT EXISTS BlogsByAuthor (
  author text,
  blog_id uuid,
  title text,
  category text,
  body text,
  published boolean,
  created_at timestamp,
  PRIMARY KEY ((author), created_at, blog_id)
) WITH CLUSTERING ORDER BY (created_at DESC);
INSERT INTO BlogsByAuthor (author,blog_id,title,category,body,published,created_at)
VALUES ('Aarav',uuid(),'Learning Cassandra','Technology','Introduction to Cassandra',true,toTimestamp(now()));
INSERT INTO BlogsByAuthor (author,blog_id,title,category,body,published,created_at)
VALUES ('Riya',uuid(),'Python Basics','Education','Python introduction',true,toTimestamp(now()));
SELECT * FROM BlogsByAuthor WHERE author='Aarav';
UPDATE BlogsByAuthor SET published=false
WHERE author='Aarav' AND created_at='2026-11-03T09:00:00Z'
AND blog_id=00000000-0000-0000-0000-000000000000;
-- For UPDATE/DELETE, use the exact primary-key values returned by your INSERT.
-- Cassandra uses partition keys for data distribution and replication for availability.
