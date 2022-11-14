---
type: post
---
# Multi-Region

The ability of a service to run simultaneously across multiple regions, rather than being located in a single geographical area. Region typically being defined as a country, or significant portion of a larger country. In the US the SEC (a financial regulator) talks about "geographically diverse" datacenters, meaning at sufficient distance to tolerate major regional issues. 

Where a locally clustered deployment might run on several machines in a single datacenter, and a mutli-zone deployment can span several datacenters in an area, a multi-region application will have instances running in different geographies and thus required an ability to replicate all resources into multiple sites, route traffic to the nearest region, and then reroute traffic in the even of region loss.

At a certain scale, or with geographically diverse clients, the ability to locate resources locally can have significant performance gains, along with the reliability increase stemming from being able to tolerate serious region events, for example a loss of connectivity through cable breaks, significant regional power loss, major weather events (Hurricane Sandy)

Related Products: AWS, GCP

Prerequisites: L4 Regional Load Balancing, Multi Zone, Alternate Site Replication

Next: N+2 Global Planning

Related Terms:

