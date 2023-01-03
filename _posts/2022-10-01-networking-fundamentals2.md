---
title: Networking Fundamentals 2
tags: [Technology]
---

In the first part of this series, I discussed about some of the fundamentals of the OSI model's 7 layers. We dove deeper into Layer 2 and Layer 3, and we can now better understand what exactly happens when I type into my browser "www.kidcoder.ca" and press Enter. 

### Data transmission

Let's start from the beginning. Let's say you want to go to kidcoder.ca. You type it out in the URL box. Because you are using the browser, you are actually interacting with the Application layer, L7. If we think in terms of the TCP/IP model, then L6 and L5 are bundled within L7.

Then we move down the stack onto L4, or the Transport Layer. 

What we've done so far is a process called "encapsulation". We have been adding header after header, placing one envelope into another. L7 was placed into the L4 envelope. L4 hidden in the L3, L3 hidden in the L2 envelope, and this L2 envelope, containing all the previous information, transforms into bits of 1s and 0s, travelling through the wires of the Internet, onto the destination device. This process of encapsulation can be visualized as follows:



### Basic Home Network

In your house, it all starts with the modem. The modem is provided by your ISP (Internet Service Provider), like Bell, Rogers, Telus or Videotron. You need an ISP to connect to the Internet. It passes data onto your modem (through a coaxial cable, a DSL cable, or more likely these days, a fiber optic cable). The modem converts the signal provided by the ISP into a digital ethernet signal which it passes onto the router. Typically, the modem and the router are two separate devices, but today some ISPs combine the two into a single device. The router itself is also a combination of several devices: a router, an access point (AP), and a switch. 

The router is what separates the computers on your home network from the computers outside of the network. Thus, the router acts as an intermediary between your LAN (local area network) and the WAN (wide area network). The AP portion is what allows your devices to connect wirelessly to the router (sometimes called WAP for "wireless AP). The switch portion allows you to connect your devices to the ethernet ports using ethernet cables (rather than doing so wirelessly).  

The router is the gateway to the outside world. It is what is protecting your LAN devices from preying eyes in the WAN. The router has a public IP address, and a private IP address. The public IP address is what the outside world sees. When your friend wants to send a message to your computer, he/she would need your router's public IP address. That is how you are identified on the Internet. That is why it is impor


### Notes:

### 1 


### Sources:
