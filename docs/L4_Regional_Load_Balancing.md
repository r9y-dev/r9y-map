---
type: post
---
# L4 Regional Load Balancing


Load balancing of "North-South" traffic, or user traffic as entering from the Internet.  L4 Loadbalancing separates traffic at the TCP layer, allowing multiple higher-level protocols to be balanced.  However, it cannot distinguish between elements in those higher protocols (eg: HTTP path, parameters)

This is generally done by providing a single endpoint which maps to a list of backend host:port pairs in the same datacenter, region, or zone.

Related Products:

Prerequisites:

Next:

Related Terms:
