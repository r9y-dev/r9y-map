# Blue Green Deployments

By deploying to two (blue, green) separated but identically-configured infrastructure environments, teams can alternate their deployments so they serve from one while updating the other.  This can be thought of as having a hot-standby during a release.  It requires the ability to change traffic patterns and data consistency between the two platforms must also be considered.

Related Products: Spinnaker, Cloud Deploy, kf

Prerequisites: CI, traffic shifting, auto scaling, assured capacity load testing

Next: Canary Releases

Related Terms: Immutable Infrastructure
