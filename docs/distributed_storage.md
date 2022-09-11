# Distributed Storage

Moving a production storage system off of disks attached directly to a host machine and onto a storage array or other form of distributed storage.  This allows a system to not lose access to its storage in the event of a node failure, or possibly a disk or disk controller failure.  Distributed storage can be accessed by nodes either via an API (in the case of cloud storage) or by mount points in a more traditional datacenter model. Depending on which storage system is used, software may have to adjust how they handle file manipulation, as the semantics may change.  Migration of data onto these can be tricky.

Related Products:

Prerequisites:

Next:

Related Terms:
