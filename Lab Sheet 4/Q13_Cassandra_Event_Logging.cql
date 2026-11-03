-- Q13. Cassandra event logging
CREATE KEYSPACE IF NOT EXISTS EventDB
WITH replication = {'class':'SimpleStrategy','replication_factor':1};
USE EventDB;
CREATE TABLE IF NOT EXISTS Events (
  user_id text,
  event_time timestamp,
  event_id uuid,
  event_type text,
  status text,
  PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC);
INSERT INTO Events (user_id,event_time,event_id,event_type,status)
VALUES ('U1','2026-11-03T09:00:00Z',uuid(),'login','success');
INSERT INTO Events (user_id,event_time,event_id,event_type,status)
VALUES ('U1','2026-11-03T09:05:00Z',uuid(),'file-upload','success');
INSERT INTO Events (user_id,event_time,event_id,event_type,status)
VALUES ('U2','2026-11-03T09:10:00Z',uuid(),'failed-login','failed');
SELECT * FROM Events WHERE user_id='U1';
SELECT * FROM Events WHERE user_id='U1'
AND event_time >= '2026-11-03T09:00:00Z'
AND event_time <= '2026-11-03T10:00:00Z';
