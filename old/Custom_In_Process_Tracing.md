---
type: post
---
# Custom (in process) Tracing

Instrumenting code directly, for the purposes of adding or improving distributed tracing to allow understanding of how traffic flows not only between services, but what they do within a single binary of a service.  For example, setting a span to indicate when it enters a critical section of a method or accesses a particular subroutine.

This is done with a language- and tracing-protocol specific library, for example OpenTelemetry for Java.

Related Products:

- OpenTelemetry
- OpenTracing
- OpenCensus

Prerequisites:  TBC

Next: TBC

Related Terms: TBC
