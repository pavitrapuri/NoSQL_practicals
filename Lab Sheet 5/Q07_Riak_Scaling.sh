#!/bin/bash
# Q7. Multiple buckets and sample key-value records
BASE="http://localhost:8098/buckets"
for bucket in students courses departments
do
  for i in $(seq 1 5)
  do
    curl -s -X PUT "$BASE/$bucket/keys/record$i" \
      -H "Content-Type: application/json" \
      -d "{\"id\":$i,\"bucket\":\"$bucket\",\"value\":\"sample$i\"}"
  done
done
echo "Sample records inserted into three buckets."
# Riak distributes keys across partitions/vnodes and cluster nodes.
# Add nodes to a properly configured cluster to demonstrate horizontal scaling.
