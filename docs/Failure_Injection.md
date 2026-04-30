---
type: post
---
# Fault injection

**Definition:**
Fault injection is a testing technique that deliberately introduces errors into a system to evaluate its resilience, error handling, and recovery mechanisms. Instead of waiting for real failures in production, engineers simulate faults under controlled conditions.

**Examples of Fault Injection**
- Network latency injection: Artificially delay requests between services to test timeout handling and retries
- Service crash simulation: Kill a microservice instance to validate failover and load balancing
- Database failure: Drop connections or return errors to test fallback logic
- Resource exhaustion: Limit CPU or memory to observe degradation behavior
- Corrupted data injection: Feed invalid or malformed inputs to validate validation and error handling

**Steps of conducting a chaos engineering experiment:**
1. Define steady state: Identifies the specific metrics (e.g., latency, throughput) that you will look at and establish a baseline for them.
2. Formulate a hypothesis: This is the practice of creating a single testable statement, for example, ‘By deleting this container pod, user login will not be affected’. Hypotheses are generally created by identifying customer user journeys and deriving test scenarios from them.
3. Use a controlled environment: While one chaos engineering principle states that experiments need to run in production, you should still start small and run your experiment in a non-production environment first, learn and adjust, and then gradually expand the scope to production environment.
4. Inject failures: This is the practice of causing disruption by injecting failures either directly into the system (e.g., deleting a VM, stopping a database instance) or indirectly by injecting failures in the environment (e.g. deleting a network route, adding a firewall rule).
5. Automate experimental execution: Automation is crucial for establishing chaos engineering as a repeatable and scalable practice. This includes using automated tools for fault injection (e.g., making it part of a CI/CD pipeline) and automated rollback mechanisms.
6. Derive actionable insights: The primary objective of using chaos engineering is to gain insights into system vulnerabilities, thereby enhancing resilience. This involves rigorous analysis of experimental results; identifying weaknesses and areas for improvement; and disseminating findings to relevant teams to inform subsequent experimental design and system enhancements.


**Best Practices:**
- Have observability tools setup beforehand
- Define steady state clearly: Use measurable indicators (latency, error rate, throughput)
- Have rollback mechanisms: Always be able to stop the experiment instantly
- Document learnings: Convert findings into system improvements

## Related Tools and Products

**Tools and Products for Fault injection:**

**1. Gremlin:**

- [Website](https://www.gremlin.com/technologies/fault-injection)
- enterprise-grade platform for infrastructure, application, and network fault injection

**2. AWS Fault Injection Simulator:**

- [Website](https://aws.amazon.com/fis/)
- managed service to run controlled fault experiments on AWS workloads

**3. Azure Chaos Studio:**

- [Website](https://azure.microsoft.com/en-us/products/chaos-studio)
- managed fault injection and resilience testing platform for Azure apps

**4. Chaos Mesh:**

- [Website](https://chaos-mesh.org/)
- Kubernetes-native fault injection (network, pod, I/O failures)

**5. Chaos Monkey:**

- [Website](https://netflix.github.io/chaosmonkey/)
- randomly terminates instances to test resilience

**6. Toxiproxy:**

- [Website](https://github.com/shopify/toxiproxy)
- simulates latency, bandwidth limits, and packet loss between services

**7. Chaos Toolkit:**

- [Website](https://chaostoolkit.org/)
- declarative chaos experiments via JSON/YAML ([recommended by google cloud](https://cloud.google.com/blog/products/devops-sre/getting-started-with-chaos-engineering))

## Prerequisites:

1. Observability in Place (Before injecting faults, the system must be measurable)

2. Stable Baseline (Clearly defined normal system behavior)
   
3. Ability to limit blast radius

4. Safety Mechanisms, Ability to deploy and rollback quickly

5. Engineering culture should support experimentation

## Next: 
TBC


## Related terms:

- **Chaos Engineering**
- **Resilience Testing**
- **Fault Tolerance**
- **High Availability**
- **Circuit Breaker Pattern**
- **Retry and Backoff Strategies**
- **Observability (logs, metrics, traces)**

---
type: post
---