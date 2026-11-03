NOSQL DATABASE DESIGN - LAB SHEET 5

This pack contains separate files for all 15 questions.
Q1-Q9: Riak KV shell scripts (.sh), using Riak's HTTP API (default localhost:8098).
Q10: Python set-operation example.
Q11-Q15: Neo4j Cypher files (.cypher).

HOW TO RUN
RIAK:
1. Install/start Riak KV on Linux.
2. Ensure its HTTP API is reachable at http://localhost:8098.
3. Install curl if needed.
4. Run a shell file with: bash Q01_Riak_Students.sh

NEO4J:
1. Start Neo4j and open Neo4j Browser.
2. Copy/paste commands from a .cypher file into the query editor.
3. Run each question separately.

PYTHON:
Run Q10_Riak_Set_Operations.py with Python 3.

IMPORTANT NOTES
- Riak KV is a distributed key-value database. It does not support general multi-key
  ACID transactions; Q8 demonstrates an application-level transaction-like update.
- Riak KV is key-oriented. Attribute-based filtering in Q9 requires Riak Search,
  configured secondary indexes, or application-side filtering.
- Quorum behavior and horizontal scaling are best demonstrated on a multi-node
  Riak cluster, not a single local node.
- Q10 performs set operations in Python application memory; it illustrates the
  application logic associated with a key-value application.
- Neo4j Cypher examples create sample graph nodes and relationships. If rerunning,
  duplicate nodes may be created unless the database is cleared or MERGE is used.
- Capture genuine screenshots after executing commands in the correct environment.
