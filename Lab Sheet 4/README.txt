NOSQL DATABASE DESIGN - LAB SHEET 4

This pack contains one separate command file for each of the 15 questions:
- Q1 to Q10: HBase Shell command files (.txt)
- Q11 to Q15: Cassandra CQL files (.cql)

HOW TO RUN
HBase:
1. Start the HBase services.
2. Open HBase Shell.
3. Copy and paste commands from one Q file at a time.
4. Commands are shell commands, not normal JavaScript programs.

Cassandra:
1. Start Cassandra.
2. Open cqlsh.
3. Run the statements from one .cql file at a time.

IMPORTANT
- This lab sheet uses HBase and Cassandra, not MongoDB.
- Q7 counter operations and Q8 TTL depend on HBase version/configuration.
- Q10 region distribution is best demonstrated on a multi-RegionServer cluster;
  a single-node local setup may show only one region/RegionServer.
- Q14 replication factor 3 and consistency comparisons require a cluster with
  enough nodes. On a single node, ONE/QUORUM/ALL comparisons are not meaningful.
- Q15 is implemented using Cassandra. For the UPDATE, use the actual blog_id
  and created_at values from the inserted row; Cassandra requires full primary key.
- Capture real screenshots after executing commands in the matching shell.
