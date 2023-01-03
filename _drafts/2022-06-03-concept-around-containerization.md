### What are containers? What are they replacing?

To run a server, you need server-specific hardware. Something like [the one shown here](https://www.deploydepot.ca/hpe-proliant-dl325-g10-plus-1u-rack-server-1-x-amd-epyc-7302p-2-80-ghz-32-gb-ram-hdd-ssd-12gb-s-sas-controller-p18604-b21/). A long time ago, before virtualization was a thing, if you wanted to have both a Windows server and a Linux server, you would have to buy two separate physical servers. With virtualization, rather than installing a single OS, we install a "hypervisor". The goal of the hypervisor is to divide the server's resources in order to be able to run multiple servers. The hypervisor can be ran in two ways: directly on the hardware (called "Type-1", "native", "bare-metal" hypervisors) or on a convetional OS (called "Type-2" or "hosted hypervisor"). VMware's vSphere Hypervisor or the ESXi are examples of a hypervisor, and they are both Type-1 hypervisors.  
Before we discuss about containers, we must first discuss the similar but more familiar technology of "virtualization".
But before virtualization


