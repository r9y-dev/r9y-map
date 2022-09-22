---
type: post
---
# Active-Active Multi Cluster (Active-Active Stacks Monolith-style)

An architecture that provides two (or more?) "stacks" of services, each of which are constantly in-use during normal operation. Now, if one stack fails, the others can immediately take the load of the failed stack, as they're already in place.
Due to this, stacks need to be provisioned in a way that sufficient capacity is in place to handle the potential failure of the largest stack.  Also data must be replicated between stacks to ensure the surviving stack can pick up transactions left behind by the failed stack.  This data might use a separate system, see: Active-Active Datastores.

Related Products: TBC

Prerequisites:  N+1, Active-Passive, Synchronous Replication

Next:  Distributed systems (no active/passive)

Related Terms: N+2 capacity planning, microservices, RTO/RPO, Active-Active Datastores
