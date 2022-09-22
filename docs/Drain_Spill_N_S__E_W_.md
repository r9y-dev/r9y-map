---
type: post
---
# Drain/Spill (North/South and East/West)

## Infrastructure-Autonomic

Description: Draining is a process of diverting traffic away from one or more targets that are part of a service (nodes/clusters). Targets which do not have enough capacity to serve all the traffic cause spillovers - preferably to other clusters/nodes, but could include predictible load shedding. This can be internal (East-West) or external (North-South) traffic.

Related Products: K8s, Service Mesh

Prerequisites: Traffic shifting, Real world traffic load testing

Next: Formal methods e.g. (TLA+)

Related Terms: [Low Context DevOps](https://www.usenix.org/publications/loginonline/low-context-devops), [Developer Effectiveness](https://martinfowler.com/articles/developer-effectiveness.html)
