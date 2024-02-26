# Active Passive Clusters

An active-passive cluster is a high availability architecture in which one node is active (processing requests) and one or more nodes are passive (standby). If the active node fails, one of the passive nodes is automatically promoted to become the active node. This ensures that there is always a single active node in the cluster, which simplifies management and eliminates the need for complex failover procedures.

**Benefits of active-passive clusters:**

* High availability: Active-passive clusters provide high availability by ensuring that there is always a single active node in the cluster. If the active node fails, a passive node is automatically promoted to become the active node, minimizing downtime.
* Simplified management: Active-passive clusters are relatively easy to manage, as there is always a single active node. This simplifies tasks such as software updates and configuration changes.
* Eliminates the need for complex failover procedures: In an active-passive cluster, failover is automatic. When the active node fails, a passive node is automatically promoted to become the active node. This eliminates the need for manual failover procedures, which can be complex and error-prone.

**Examples of active-passive clusters:**

* Database clusters: Active-passive clusters are commonly used for database systems. In a database cluster, the active node processes read and write requests, while the passive node stands by as a backup. If the active node fails, the passive node is automatically promoted to become the active node, ensuring that the database remains available.
* Web server clusters: Active-passive clusters can also be used for web servers. In a web server cluster, the active node handles incoming web requests, while the passive node stands by as a backup. If the active node fails, the passive node is automatically promoted to become the active node, ensuring that the website remains available.

**Considerations for implementing active-passive clusters:**

* Cost: Active-passive clusters typically require more hardware than other high availability architectures, such as active-active clusters. This is because there must be at least one passive node in the cluster, which is not actively processing requests.
* Performance: Active-passive clusters can experience a slight performance penalty compared to other high availability architectures, such as active-active clusters. This is because the passive node is not actively processing requests, and there is a small amount of overhead involved in promoting a passive node to become the active node.
* Scalability: Active-passive clusters can be scaled by adding more passive nodes to the cluster. However, it is important to note that the number of passive nodes in a cluster is limited by the number of active nodes. This is because there must always be at least one active node in the cluster.

## Related Tools and Products

**Tools and products for active-passive clusters:**

* **Pacemaker:** Pacemaker is a cluster management tool that can be used to configure and manage active-passive clusters. It provides a variety of features, including:
    * Resource management: Pacemaker can be used to manage resources such as IP addresses, file systems, and databases.
    * Failover management: Pacemaker can automatically failover resources from one node to another in the event of a failure.
    * High availability management: Pacemaker can be used to ensure that there is always a single active node in the cluster.
    * [Website](https://clusterlabs.org/)

* **Corosync:** Corosync is a cluster communication system that is used by Pacemaker. It provides a variety of features, including:
    * Cluster membership management: Corosync manages the membership of the cluster and ensures that all nodes in the cluster are aware of each other.
    * Message passing: Corosync provides a reliable message passing mechanism that is used by Pacemaker to communicate with other nodes in the cluster.
    * Quorum management: Corosync manages the quorum for the cluster. This ensures that there is always a majority of nodes in the cluster that are operational.
    * [Website](https://corosync.github.io/)

* **DRBD:** DRBD is a distributed block device that can be used to create a highly available shared storage system. It provides a variety of features, including:
    * Block-level replication: DRBD replicates data blocks between two or more nodes in the cluster.
    * Failover support: DRBD can automatically failover data from one node to another in the event of a failure.
    * Load balancing: DRBD can be used to load balance I/O requests across multiple nodes in the cluster.
    * [Website](https://www.drbd.org/)

* **Keepalived:** Keepalived is a virtual IP address manager that can be used to create a highly available virtual IP address. It provides a variety of features, including:
    * Virtual IP address management: Keepalived can be used to create and manage virtual IP addresses.
    * Failover support: Keepalived can automatically failover the virtual IP address from one node to another in the event of a failure.
    * Load balancing: Keepalived can be used to load balance traffic across multiple nodes in the cluster.
    * [Website](https://www.keepalived.org/)

**Resources for active-passive clusters:**

* [Active-Passive Clusters](https://www.ibm.com/docs/en/spectrum-scale-tm/5.1.0?topic=clusters-active-passive-clusters)
* [Building an Active-Passive Cluster with Linux and DRBD](https://www.digitalocean.com/community/tutorials/how-to-build-an-active-passive-cluster-with-linux-and-drbd)
* [Active-Passive HA Clusters with RHEL 8 and Pacemaker](https://www.tecmint.com/active-passive-ha-clusters-with-rhel-8-and-pacemaker/)

## Related Terms

**Related terms to active-passive clusters:**

* **High availability (HA):** HA is the ability of a system to remain operational even in the event of a failure. Active-passive clusters are one type of HA architecture.
* **Failover:** Failover is the process of switching from one node to another in a cluster in the event of a failure. Active-passive clusters use automatic failover to ensure that there is always a single active node in the cluster.
* **Load balancing:** Load balancing is the process of distributing traffic across multiple nodes in a cluster. Active-passive clusters can be used for load balancing, but they are not as efficient as active-active clusters.
* **Single point of failure (SPOF):** A SPOF is a component of a system that, if it fails, will cause the entire system to fail. In an active-passive cluster, the passive node is a potential SPOF.
* **Redundancy:** Redundancy is the duplication of components in a system to increase reliability. Active-passive clusters use redundancy to ensure that there is always a single active node in the cluster.

**Other related terms:**

* **Cluster:** A cluster is a group of computers that work together as a single system. Clusters can be used for a variety of purposes, including high availability, load balancing, and distributed computing.
* **Node:** A node is a single computer in a cluster. Nodes can be physical servers, virtual machines, or even containers.
* **Distributed system:** A distributed system is a system in which components are located on different computers that communicate with each other over a network. Active-passive clusters are a type of distributed system.

**Additional resources:**

* [High Availability Clustering](https://www.ibm.com/topics/high-availability-clustering)
* [Failover Clustering](https://docs.microsoft.com/en-us/windows-server/failover-clustering/failover-clustering-overview)
* [Load Balancing](https://www.cloudflare.com/learning/performance/load-balancing/)
* [Single Point of Failure (SPOF)](https://www.techopedia.com/definition/26949/single-point-of-failure-spo

## Prerequisites

Before you can implement active-passive clusters, you need to have the following in place:

* **Hardware:** You will need at least two servers to create an active-passive cluster. The servers should be identical in terms of hardware configuration.
* **Software:** You will need to install the necessary software on the servers. This includes the operating system, the cluster management software (such as Pacemaker or Red Hat Cluster Suite), and the application software that you want to run on the cluster.
* **Network:** You will need to configure a network between the servers in the cluster. The network should be reliable and have sufficient bandwidth to handle the traffic between the servers.
* **Storage:** You will need to configure shared storage for the cluster. The shared storage can be a SAN, a NAS, or a distributed file system.
* **DNS and load balancer:** You will need to configure DNS and a load balancer to direct traffic to the active node in the cluster.

**Optional but recommended:**

* **Monitoring:** You should set up monitoring to be able to track the health of the cluster and to be alerted in the event of a failure.
* **Automation:** You can use automation tools to simplify the management of the cluster. For example, you can use automation to handle failover and to deploy software updates.

**Additional resources:**

* [Prerequisites for an Active/Passive Cluster Configuration](https://docs.oracle.com/en/cloud/paas/data-integration-service/use-cases/prepare-active-passive-cluster-configuration.html#Prerequisites-for-an-ActivePassive-Cluster-Configuration)
* [How to Build an Active-Passive Cluster with Linux and DRBD](https://www.digitalocean.com/community/tutorials/how-to-build-an-active-passive-cluster-with-linux-and-drbd)
* [Building an Active/Passive HA Cluster on Ubuntu 20.04](https://phoenixnap.com/kb/active-passive-ha-cluster-ubuntu-20-04)

## What's next?

After you have implemented active-passive clusters, there are a few things you can do to improve the reliability and performance of your cluster:

* **Monitor the cluster:** Set up monitoring to track the health of the cluster and to be alerted in the event of a failure. This will help you to identify and resolve problems quickly.
* **Automate cluster management:** Use automation tools to simplify the management of the cluster. For example, you can use automation to handle failover and to deploy software updates. This will save you time and reduce the risk of human error.
* **Implement a disaster recovery plan:** Create a disaster recovery plan that outlines the steps you will take in the event of a disaster. This plan should include procedures for backing up data, restoring data, and failing over to a secondary site.
* **Continuously improve the cluster:** Regularly review the performance of the cluster and make improvements as needed. This may involve upgrading the hardware, tuning the software, or adding additional features.

**Additional considerations:**

* **Scalability:** If you expect your workload to grow in the future, you should consider how you will scale the cluster. You may need to add more nodes to the cluster or upgrade the hardware.
* **Security:** Make sure to implement appropriate security measures to protect the cluster from unauthorized access and attacks. This may involve configuring firewalls, intrusion detection systems, and access control lists.
* **Compliance:** If your organization is subject to compliance regulations, you should ensure that the cluster meets those regulations. This may involve implementing additional security measures or following specific procedures.

**Additional resources:**

* [Best Practices for Managing an Active-Passive Cluster](https://www.ibm.com/docs/en/spectrum-scale-tm/5.1.0?topic=clusters-best-practices-active-passive)
* [How to Manage an Active-Passive Cluster](https://www.redhat.com/en/topics/linux/managing-active-passive-clusters)
* [Active-Passive Clusters: A Guide to High Availability](https://www.netapp.com/us/media/tr-4662.pdf)