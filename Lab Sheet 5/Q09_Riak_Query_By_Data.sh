#!/bin/bash
# Q9. Query-by-data using application-level filtering
BASE="http://localhost:8098/buckets/user_records/keys"

curl -s -X PUT "$BASE/U1" -H "Content-Type: application/json" -d '{"name":"Aarav","city":"Roorkee","age":20,"preference":"dark"}'
curl -s -X PUT "$BASE/U2" -H "Content-Type: application/json" -d '{"name":"Riya","city":"Haridwar","age":21,"preference":"light"}'
curl -s -X PUT "$BASE/U3" -H "Content-Type: application/json" -d '{"name":"Karan","city":"Roorkee","age":22,"preference":"dark"}'

# Fetch each known key, then filter JSON in application logic.
for key in U1 U2 U3
do
  curl -s "$BASE/$key"
  echo
done
# Riak KV is key-oriented; arbitrary attribute searches need Riak Search,
# secondary indexes where configured, or application-side filtering.
