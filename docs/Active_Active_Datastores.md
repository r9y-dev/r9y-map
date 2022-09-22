---
type: post
---
# Active-Active Datastores

A datastore that provides strong replication between 2+ locations in a way that allows
both reads and writes to occur at both locations can be referred to as Active Active.

This is in comparison to Active-Passive, which require a failover in order
to provide reads/writes at the non-primary location.

There also exists readonly replicas, but those would not qualify as Active-Active, due
to the inability to write to the non-primary datastore.

Related Products:  Spanner, CockroachDB

Prerequisites: Synchronous Replication

Next:

Related Terms: Active-Passive Datastores, Replication, Consistency, CAP Theorem