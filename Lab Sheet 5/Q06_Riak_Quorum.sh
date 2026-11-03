#!/bin/bash
# Q6. Read/write quorum demonstration
# Riak quorum headers: X-Riak-R, X-Riak-W, X-Riak-PR, X-Riak-PW.
# Values depend on bucket N-value and cluster size. This example assumes N=3.
BASE="http://localhost:8098/buckets/quorum_demo/keys/student1"

# Write quorum W=2
curl -i -X PUT "$BASE" -H "Content-Type: application/json" -H "X-Riak-W: 2" -d '{"name":"Aarav","marks":85}'

# Read quorum R=2
curl -i "$BASE" -H "X-Riak-R: 2"

# Quorum settings control how many replicas must acknowledge reads/writes.
# Configure a multi-node Riak cluster and suitable bucket n_val for a real test.
