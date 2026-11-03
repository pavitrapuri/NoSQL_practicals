#!/bin/bash
# Q8. Multi-operation transaction-like shopping cart example
# Riak KV does not provide general multi-key ACID transactions.
# This example reads one cart value, modifies it in application logic,
# and writes the complete updated value back.
BASE="http://localhost:8098/buckets/cart_transaction/keys/U1"

curl -s -X PUT "$BASE" -H "Content-Type: application/json" \
  -d '{"user_id":"U1","items":[{"product":"Book","qty":1,"price":200}],"total":200}'

# Application-level update: add Pen and update total
curl -i -X PUT "$BASE" -H "Content-Type: application/json" \
  -d '{"user_id":"U1","items":[{"product":"Book","qty":1,"price":200},{"product":"Pen","qty":2,"price":20}],"total":240}'

curl -i "$BASE"
# Concurrent updates can conflict; use conflict resolution/application logic.
