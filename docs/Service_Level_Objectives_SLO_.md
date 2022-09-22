---
type: post
---
# Service Level Objectives (SLOs)

By defining a measurable objective of acceptable user happiness, teams are able to make data driven decisions on when to prioritize reliability improvements.  SLOs codify this measurement through a human-interpretable ratio of "good"/total resulting in a ratio often measured in "nines" as a highly-reliable system tends to have 99.9% or 99.99% set as a goal.

This is often written in shorthand as "three nines" for 99.9%

SLOs are measured over a duration, such as 30 days or one week.

The inverse of an SLO is an Error Budget, which provides a measurement of "how many errors are left" or a sense of permissible failure.  This can be "used" to perform experiements or operations with small or well-understood risk, allowing flexibility while staying within the SLO.

Examples of types of SLOs are:  Availability, Latency (Speed), Throughput, Durability.  Each of these are measured by a different set of metrics, called Service Level Indicators (SLIs).  Only when these SLIs are coupled with an goal and measured over a duration do they become an SLO.  These can then be coupled with an agreement such as repayment, for when the SLO is breached, such an agreement is called a Service Level Agreement (SLA). These tend to involve lawyers.

Related Products: Many monitoring and observability vendors provide SLO products:

- Google Cloud Service Monitoring
- Datadog
- NewRelic
- Noble9

Open Source implementations are also available:

- <https://github.com/google/slo-generator>
- OpenSLO

Prerequisites: Service Level Indicators (SLIs)

Next:

Related Terms: