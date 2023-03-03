---
type: post
---
# Automatic Rollbacks

The ability to roll back a release that has been determined to be somehow faulty, without any human interaction.
For example, when a release is exposed to user traffic, if the response rate violates an Availability or Latency SLO, or otherwise can be measured to be significantly underperforming, the bad release should be immediately rolled back to the previously known-good version.

This is straight-forward for releases that have well-known characteristics of what is "good" and "bad" but can be tricky if that is harder to measure.

This is also much easier when a release is first rolled out, harder if it is discovered near the end of a rollout.

This implies that a release is *safe* to rollback. Data or schema changes may result in a "point of no return" that does not allow for a rollback.  These should be avoided as much as possible, but if they can't be avoided, automatic rollbacks must be disabled for this particular release.

Related Products: Harness CD

Prerequisites: TBC

Next: TBC

Related terms: TBC
