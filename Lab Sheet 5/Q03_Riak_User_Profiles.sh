#!/bin/bash
# Q3. User profiles and preferences (PUT and GET)
BASE="http://localhost:8098/buckets/user_profiles/keys"

curl -i -X PUT "$BASE/U1" -H "Content-Type: application/json" -d '{"name":"Aarav","email":"aarav@example.com","city":"Roorkee","language":"English","theme":"dark","notifications":true}'
curl -i -X PUT "$BASE/U2" -H "Content-Type: application/json" -d '{"name":"Riya","email":"riya@example.com","city":"Haridwar","language":"Hindi","theme":"light","notifications":false}'

curl -i "$BASE/U1"
curl -i "$BASE/U2"
