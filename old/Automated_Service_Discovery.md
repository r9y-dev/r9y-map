---
type: post
---
# Automated Service Discovery

The ability for one service to find another service without needing a pre-determined mapping. Service A should be able to find all instances or endpoints that provide Service B, including those in other geographies or clusters (possibly via some gateway).

These can be implemented through a variety of systems, including DNS, Zookeeper, Kubernetes (etcd), Consul.

One must be careful to consider health and liveness of a discovered system, as well as its rated capacity and current demand before sending more traffic to it.

Related Products: TBC

Prerequisites: TBC

Next: TBC

Related terms: TBC
