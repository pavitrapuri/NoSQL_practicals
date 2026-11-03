#!/bin/bash
# Q1. Riak KV basic key-value operations
# Start Riak KV on Linux first. HTTP API default: localhost:8098
BASE="http://localhost:8098/buckets/students/keys"

# Store student records
curl -i -X PUT "$BASE/1" -H "Content-Type: application/json" -d '{"id":1,"name":"Aarav","course":"BCA"}'
curl -i -X PUT "$BASE/2" -H "Content-Type: application/json" -d '{"id":2,"name":"Riya","course":"BCA"}'

# Retrieve a record
curl -i "$BASE/1"

# Update a record (PUT replaces the value for this key)
curl -i -X PUT "$BASE/1" -H "Content-Type: application/json" -d '{"id":1,"name":"Aarav Sharma","course":"BCA"}'

# Delete a record
curl -i -X DELETE "$BASE/2"
