# External Rate Limiting

The ability to control the amount of traffic that enters a system from the outside.  Generally this can be considered traffic from an external loadbalancer or proxy, representing user traffic.  This might also be considered for traffic from other services, operated by other teams, but still within a single organization or product.

Such rate limiting might be done per-system, per-location, per-shard, or even per-instance (compute node).  Coordination between elements or pre-defined limits might be used to determine what rate traffic might be limited, as well as what is done with excess traffic.

Methods for rate limiting might be "client pushback" wherein client code is made aware of a signal that can be offered by a service to tell clients "please slow down" or "try back later".  Alternatively, if a client is not controllable, simply responding with errors or dropping requests or connections entirely (eg TCP RST) may suffice.

Related Products:

Prerequisites:

Next:

Related Terms:

- Client pushback
- Retry with Jitter
