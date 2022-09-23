# Custom VMs via semi-automation

Introduction of a method for creating a VM via a script, without needing a human to manually install programs or their dependencies.  This can be manually developed or use a framework built for this purpose.

VMs built in this manner have a specific purpose and might be custom designed for a single purpose, but if they are destroyed or corrupted, they can be recreated realtively easily.  This does not include any data or state that had accrued since last creation.

This can be used to roll out new builds of software or its dependencies, including underlying things like kernel or OS upgrades.  These can be tested via this automation outside of production before being used to create production VMs.

Related Products:

- Salt
- Ansible
- Chef

Prerequisites:  TBC

Next: TBC

Related Terms: TBC
