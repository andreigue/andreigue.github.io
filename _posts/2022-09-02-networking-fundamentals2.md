---
title: Networking Fundamentals 2
tags: [Technology]
---

In the first part of this series, I discussed about some of the fundamentals of the OSI model's 7 layers. We dove deeper into Layer 2 and Layer 3, and we can now better understand what exactly happens when I type into my browser "www.kidcoder.ca" and press Enter. 

### Data transmission

Let's start from the beginning. Let's say you want to go to kidcoder.ca. You type it out in the URL box. Because you are using the browser, you are actually interacting with the Application layer, L7. If we think in terms of the TCP/IP model, then L6 and L5 (from the OSI model) are bundled within L7. This data includes things like the website we want to look up, the type of request (GET request in this case), the browser we are using, the plugins we have available, the user session information (user authenticated or not), etc. All of this is bundled into an (imaginary) envelope and passed onto the next layer of the TCP stack: Layer 4.

The Transport Layer will take the L7 data, divide into into smaller pieces called "segments", and attach a header to each segment. This header will contain information pertaining to the TCP (or UDP) protocol, namely sender and recipient ports, segment ordering information, and a checksum, which is a fast way to make sure that the data has not been altered along the path.  These packets will end up going through the destination router's sfirewall through a specific port. This layer has two main protocols: TCP or UDP. TCP (Transmission Control Protocol) is a connection-oriented protocol, which ensures that all data packets arrive at the destination, in the correct order. It is reliable, but slower than UDP. UDP (User Datagram Protocol) is a connectionless protocol, which sends data packets without checking if they arrive and without ensuring the correct order of arrival. Anytime you videocall someone (think Zoom, Skype, Discord), or livestream, UDP is used. These are applications where reduced latency and overhead is more important the reliability offered by TCP. Since we are searching up www.kidcoder.ca, which is a website, we are using HTTPS. HTTPS uses port 443, and it uses TCP. If kidcoder.ca was not using TLS/SSL encryption, then we would be using HTTP, and that defaults to port 80, which still uses TCP as the transport protocol. [(1)](#1)

Next we move onto L3: the Network layer. Here we deal with IP addresses and routers. An IP header is attached to the segments, and this data is now called a "packet", or sometimes a "datagram". At this level, we hold information such as source and destination IP addresses, packet length, etc. 

This gets passed onto the layer 2: Data link. Here we deal with MAC addresses and switches. We add a L2 header and a footer, and now we have a "frame". All of the previous data has now been "encapsulated" into frames.

What we've done so far is a process called "encapsulation". We have been adding header after header, placing one envelope into another. L7 was placed into the L4 envelope. L4 hidden in the L3, L3 hidden in the L2 envelope, and this L2 envelope, containing all the previous layers/information, transforms into bits of 1s and 0s, ready to travel through the wires (L1) to reach it's final destination. This process of encapsulation can be visualized as follows:

![View of networks](..\images\encapsulation.jpg)
[https://www.firewall.cx/networking-topics/the-osi-model/179-osi-data-encapsulation.html](https://www.firewall.cx/networking-topics/the-osi-model/179-osi-data-encapsulation.html)

Now that we have the frames ready to go, they are sent from my computer onto my switch, which reads the frame header, telling it to send the message to my router. Once the router receives it, it reads the L3 header, which tells it the destination IP address. Once the destination router is reached, the message is sent to the website hosting server. 

The website's server knows about the TCP/IP model, and so when it receives the frame, it follows the standard protocol for reading it. What follows is the process of "de-encapsulation". It reads the L2 header (MAC address info), the L3 header (IP address info) and the L4 header (TCP port 443 is used). The L7 data is then read: the user wanted to access "www.kidcoder.ca".

![View of networks](..\images\decapsulation.jpg)
[https://www.firewall.cx/networking-topics/the-osi-model/179-osi-data-encapsulation.html](https://www.firewall.cx/networking-topics/the-osi-model/179-osi-data-encapsulation.html)

The website server proceeds to place all the L7 data into an envelope, and the encapsulation process begins all over again, but now from the server side. The server encapsulates the data into segments (L4), then into packets (L3), and finally into frames (L2). This is sent back to the user through the electrical signals of 1s and 0s. 

In summary, when I search for www.kidcoder.ca in my browser, the entire TCP/IP suite was used, with all the layers being used and encapsulated one by one until we get frames. These frames are sent across the physical network, going from switch to multiple routers to switch and then finally reaching the destination server (the one hosting www.kidcoder.ca). The server de-encapsulates the frame to read the L7 data (what the web browser wants). 

### Notes:

### 1 
An example of a port that uses UDP is the DHCP ports 67, 68. DHCP (Dynamic Host Configuration Protocol) is used to automatically assign a private IP address to clients on a private network.

### Sources:
[https://docs.oracle.com/cd/E19455-01/806-0916/ipov-32/index.html](https://docs.oracle.com/cd/E19455-01/806-0916/ipov-32/index.html)