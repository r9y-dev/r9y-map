# Design around Universal Failure Domains

(why "Universal"?)

When an organization consistently defines failure domains which are effective ways of mapping logical grouping of systems in such a way that logical or physical isolation reduces the spread of failure across boundary lines.

For example, defining a hierarchy of domains like: VM, rack, building, campus, region.  As long as these are done *consistently* and in a meaningful way where developers designing a system using these concepts can understand the dynamic effect of failure modes with regards to these domains, these terms can be used to create a more robust system.

When these terms are used poorly, or their meanings are not understood, assumptions can be made by designers that may interpret their name to imply some level of protection that does not actually match reality.

Related Products:

Prerequisites:

Next:

Related Terms:
