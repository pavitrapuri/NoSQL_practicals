#!/bin/bash
# Q2. User session information in Riak KV
BASE="http://localhost:8098/buckets/user_sessions/keys"

curl -i -X PUT "$BASE/session101" -H "Content-Type: application/json" -d '{"session_id":"session101","user_id":"U1","login_time":"2026-11-03T09:00:00Z","status":"active"}'
curl -i -X PUT "$BASE/session102" -H "Content-Type: application/json" -d '{"session_id":"session102","user_id":"U2","login_time":"2026-11-03T09:10:00Z","status":"active"}'

# Retrieve session using its key
curl -i "$BASE/session101"
