#!/bin/bash
# Q5. Bucket, key and value demonstration
BASE="http://localhost:8098/buckets/demo/keys"

# Bucket = demo; Key = student1; Value = JSON document
curl -i -X PUT "$BASE/student1" -H "Content-Type: application/json" -d '{"name":"Aarav","marks":85}'
# Store a string value
curl -i -X PUT "$BASE/message1" -H "Content-Type: text/plain" -d 'Hello Riak'
# Store a list as JSON
curl -i -X PUT "$BASE/course_list" -H "Content-Type: application/json" -d '["BCA","BBA","BTech"]'

curl -i "$BASE/student1"
curl -i "$BASE/message1"
curl -i "$BASE/course_list"
