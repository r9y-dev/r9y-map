# Host Metrics and Logging

Measuring metrics of a host (eg: cpu usage, disk usage, disk fullness, memory residence metrics, uptime). This is often done via 3rd party monitoring systems which might utilize an on-host agent process.  Alternatively, the OS itself might provide metrics visible to logged-in users via simple tools like `top` or via various files in `/var/proc`.
Also, the writing and analysis of logs present on that same host.  Often this analysis is done via `ssh` or `scp`ing logs back to a workstation in an ad-hoc manner.

Related Products:

- Nagios!
- mttd(?)

Prerequisites:

Next:

Related Terms:
