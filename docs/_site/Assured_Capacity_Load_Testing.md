# Assured Capacity Load Testing

A load test which is automatically run to ensure that the expected capacity of a system is still assured in the latest configuration. For example, when deploying a new binary for a service that has an expected capacity rating of 100 qps, ensure that a single instance can safely support 10 qps, while still performing within expected bounds, and that at least 10 replicas are available.

This can be compared against "Breaking Point" load testing, wherein a component of a system is pushed until it fails.  In the case of Assured Capacity, you don't want to record the point at which it fails, but just be Assured that it can achieve the expected rating.  This can be thought of as a form of system-wide performance regression testing.

Related Products:

Prerequisites:

Next:

Related Terms: