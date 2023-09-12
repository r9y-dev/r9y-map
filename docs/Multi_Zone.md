---
type: post
---
# Multi Zone

A multi-zone deployment is a system that is spread across more than one [compute zone](https://cloud.google.com/compute/docs/regions-zones) to reduce the risk of an infrastructure outage affecting all resources simultaneously.

There are a number of benefits to using multi-zone deployments, including:

- *Increased availability*: If one zone fails, the other zones can continue to serve traffic.
- *Improved performance*: By spreading resources across multiple zones, you may improve performance by reducing the distance that data has to travel, reducing latency.
- *Reduced costs*: Multi-zone deployments may help to reduce costs by allowing you to take advantage of lower pricing in certain zones.

There are a few things to keep in mind when designing a multi-zone deployment, including:

- *The cost of running resources in multiple zones*: The cost of running resources in multiple zones can be higher than the cost of running resources in a single zone.
- *The complexity of managing resources in multiple zones*: Managing resources in multiple zones can be more complex than managing resources in a single zone.
- The impact of a zone failure on your application*: If a zone fails, it can have a significant impact on your application without sufficient consideration of this failure case.

If you are considering using a multi-zone deployment, it is important to weigh the benefits and risks carefully to make sure that it is the right choice for your application.
