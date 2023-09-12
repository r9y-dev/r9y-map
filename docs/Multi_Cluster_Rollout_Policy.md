---
type: post
---
# Multi-cluster Rollout Policy

A multi-cluster rollout policy is a set of rules that govern how a software update is rolled out to multiple clusters. The policy can specify the order in which the clusters are updated, the percentage of nodes that are updated at a time, and the amount of time that is allowed for each cluster to complete the update.

Multi-cluster rollout policies are important for ensuring that a software update is rolled out in a controlled and orderly manner. By specifying the order in which the clusters are updated, you can avoid overloading any one cluster with too much traffic. By specifying the percentage of nodes that are updated at a time, you can ensure that the update does not cause any disruptions to the service. And by specifying the amount of time that is allowed for each cluster to complete the update, you can ensure that the update is completed in a timely manner.

There are a number of different multi-cluster rollout policies that you can use. The best policy for you will depend on the specific needs of your application. Some of the most common multi-cluster rollout policies include:

- *Canary rollout*: In a canary rollout, the update is first rolled out to a small percentage of nodes in a single cluster. If the update is successful, it is then rolled out to a larger percentage of nodes in the same cluster. This process is repeated until the update has been rolled out to all nodes in the cluster.
- *Blue-green rollout*: In a blue-green rollout, two identical clusters are created. The update is first rolled out to the new cluster. If the update is successful, the traffic is then switched to the new cluster. This process ensures that there is no downtime during the update.
- *Rolling update*: In a rolling update, the update is rolled out to one node at a time. This process ensures that the update is completed in a controlled and orderly manner.

The following are some additional tips for creating a multi-cluster rollout policy:

- *Start with a small percentage of nodes*. This will help you to identify any potential problems with the update before it is rolled out to all nodes.
- *Allow enough time for each cluster to complete the update*. This will help to ensure that the update is completed in a timely manner.
- *Monitor the update closely*. This will help you to identify any problems that occur during the update.

By following these tips, you can create a multi-cluster rollout policy that will help you to roll out software updates in a controlled and orderly manner.