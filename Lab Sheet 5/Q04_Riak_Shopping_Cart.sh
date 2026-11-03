#!/bin/bash
# Q4. Shopping cart using one JSON value per user key
BASE="http://localhost:8098/buckets/shopping_cart/keys"

# Add products by storing the cart document
curl -i -X PUT "$BASE/U1" -H "Content-Type: application/json" -d '{"user_id":"U1","items":[{"product_id":101,"name":"Book","quantity":1,"price":200},{"product_id":102,"name":"Pen","quantity":2,"price":20}]}'

# Retrieve cart
curl -i "$BASE/U1"

# Update quantity by replacing the complete JSON value
curl -i -X PUT "$BASE/U1" -H "Content-Type: application/json" -d '{"user_id":"U1","items":[{"product_id":101,"name":"Book","quantity":1,"price":200},{"product_id":102,"name":"Pen","quantity":5,"price":20}]}'

# Remove product 101 by replacing cart value
curl -i -X PUT "$BASE/U1" -H "Content-Type: application/json" -d '{"user_id":"U1","items":[{"product_id":102,"name":"Pen","quantity":5,"price":20}]}'

# Delete the complete cart
# curl -i -X DELETE "$BASE/U1"
