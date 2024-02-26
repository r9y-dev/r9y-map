---
type: post
---
# Active Passive Clusters

An architecture that provides two "stacks" of services wherein if one stack fails, the other can be quickly used.  Expectation is that the two stacks do not share basic failure domains, as both failing together would not be helpful.  This can either be via an automatic or manual trigger of failover, but mostly automated process.

Related Products: VCS, MS Failover Cluster, Oracle RAC, VMware HA

Prerequisites: Distributed Systems Awareness, DNS/Simple LB

Next: Active-Active Clusters

Related terms: Data Replication