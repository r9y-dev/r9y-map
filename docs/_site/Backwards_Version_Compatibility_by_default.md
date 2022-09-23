# Backwards Version Compatibility

Consistently maintaining (not breaking or removing) API schemas, RPC fields, etc on new releases.  May require a deprecation policy.  More subtle example: semantic changes also shouldn't be introduced in point releases.  Versioning policy should be in place to allow for "breaking changes" across major releases (eg: v1.3.1 → 2.0.0).  This is all intended to allow fast rollbacks in the future, without unintended side-effects. 

Related Products: TBC

Prerequisites: Data Versioning, Versioning Policy

Next:  Backwards Version Compatibility by default, Rollbacks, Multi-cluster rollouts, Blue/Green, Canary

Related Terms: API Versioning, Feature Flags
