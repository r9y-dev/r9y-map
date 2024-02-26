---
type: post
---
# Auto Failover

**Auto Failover** is a process that automatically switches traffic from a failed server or component to a healthy one. This helps to ensure that applications and services remain available even if one or more components fail.

Auto failover can be implemented in a variety of ways, but some common methods include:

- **Active/Passive Failover**: In this setup, there is a primary server that handles all traffic and a secondary server that is on standby. If the primary server fails, the secondary server is automatically activated and takes over.
- **Active/Active Failover**: In this setup, multiple servers are active and handle traffic simultaneously. If one server fails, the other servers automatically take on the additional load.
- **N+1 Failover**: In this setup, there are multiple active servers and one or more standby servers. If one of the active servers fails, a standby server is automatically activated to take its place.

Auto failover can be implemented at different levels of the stack, including:

- **Hardware Failover**: This type of failover switches traffic from a failed hardware component to a healthy one. For example, if a server fails, traffic can be automatically switched to a different server.
- **Software Failover**: This type of failover switches traffic from a failed software component to a healthy one. For example, if a web application fails, traffic can be automatically switched to a different instance of the application.
- **Network Failover**: This type of failover switches traffic from a failed network path to a healthy one. For example, if a network link fails, traffic can be automatically switched to a different link.

Auto failover is an important part of a highly available system. By automatically switching traffic from failed components to healthy ones, auto failover helps to ensure that applications and services remain available even in the event of a failure.

Here are some examples of auto failover in practice:

- **Amazon Web Services (AWS)** offers a variety of auto failover features, including:
    - **Amazon Route 53** can automatically failover DNS traffic to a healthy region if the primary region fails.
    - **Amazon Elastic Compute Cloud (EC2)** can automatically failover instances to a different Availability Zone if the primary Availability Zone fails.
    - **Amazon Relational Database Service (RDS)** can automatically failover to a replica database if the primary database fails.
- **Google Cloud Platform (GCP)** also offers a variety of auto failover features, including:
    - **Google Cloud DNS** can automatically failover DNS traffic to a healthy region if the primary region fails.
    - **Google Compute Engine** can automatically failover instances to a different zone if the primary zone fails.
    - **Google Cloud Spanner** can automatically failover to a replica instance if the primary instance fails.

Auto failover is a critical feature for any highly available system. By automatically switching traffic from failed components to healthy ones, auto failover helps to ensure that applications and services remain available even in the event of a failure.