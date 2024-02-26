---
type: post
---
# Central Certificate Rotation

When moving away from manually-created encryption certificates and monitors or other human-interrupting systems for replacing expired or about-to-expire certificates, one should introduce a method for tracking all certificates and details around their expiry, as well as a system that can push out updates to those certificates without human intervention.

Like any large automation system, this can be dangerous.  A mismanaged system that can push encryption primitives to many machines should be treated with caution and must include many safety checks, to avoid severly harming a running system.

Related Products: ACME, digicert, kubernetes, keyfactor

Prerequisites: TBC

Next: TBC

Related terms: TBC
