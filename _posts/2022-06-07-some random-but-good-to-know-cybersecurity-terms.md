### I was browsing through Quora, and I saw someone answer the following question: What is IPS, and what is WAF? And how are they different? Here's my understanding...

IPS stands for Intrusion Prevention System, a WAF stands for Web Application Firewall.

### Before talking about IPS, I have to mention its predecessor (although not obsolete), the IDS, or Intrusion Detection System. 

IDS is a passive system that scans network traffic and attempts to identify any dangerous or suspicious traffic. After detection, it alerts (via email, for example) the security team, or the dedicated network administrator personnel, who can view the alert and take any further required steps. The IPS does everything which the IDS does, but instead of just detecting and recording possible threats, it attempts to prevent them from causing damage within the network. But because IDS is a large subset of the IPS, and still has a place in a secure network, I will dive deeper into it.

The IDS (and IPS) is not perfect, as [shown in this video](https://www.youtube.com/watch?v=7gZYbIr_Qj4), but nevertheless it is typically used as a backup to a firewall. In other words, an IDS/IPS will likely be located in between a company's firewall and the rest of its network.

### If the IPS does everything that the IDS does and more, why can't we just use an IPS on its own?

To understand why IPSes can't simply replace IDSes, think about the following situation: because the IDS/IPS is not perfect, we will likely get false positives (thinking that a legitimate and benign network traffic is malicious) and false negatives (thinking that a threat is benign). More specifically, because the IPS is an active system which aims to eliminate a threat, if we get a false positive, the IPS will prevent the legitimate traffic from getting through. On the other hand, and IDS will simply flag it as suspicious, and a network admin can take a closer look at it.

### How can IDSes be categorized?

There are two types of IDSes: HIDS (host-based IDS), which performs intrusion detection for a single computer/device, and the more common NIDS (network-based IDS), which resides on a node on the network.

The IDS can further be split into two categories: signature-based (SIDS) and anomaly-based (AIDS). 

SIDS monitors all the packets traversing the network and compares them against a database of "signatures" of known malicious threats, similar to how an antivirus detects malware. A malware signature is a unique string representing a specific type of malware, essentially encoding the behaviors and characteristics of that malware. So an SIDS essentially looks at a sequence of network traffic, and compares it to the database of signatures. If there's a match, then the system gets triggered, and an alert is sent. If there is no match, then the SIDS assumes that everything is okay.

Signature-based detection methods cannot detect new malware, including variants of existing malware. The database must continuously be updated as new malware is discovered around the world. More precisely, since 2011, the amount of new malware signatures increases by approximately 10 million per year. Currently, signature databases may contain billions of entries, which in turn negatively affects the perfomance of purely signature-based detection methods.

AIDS monitors network traffic and compares the general behavior to that of "normal traffic". Instead of using specific signatures and attributes of a threat, anomaly-based (a.k.a. "heuristic-based" or "behavior-based") detection techniques infer malicious intent based on general observations, typically using "intrustion detection rules", and sometimes along with Machine Learning. It will consider things like traffic bandwidth, protocols, ports, on top of odd behavior such as deleting a large number of files, monitoring keystrokes, changing settings, etc. While SIDS is rigid and takes care of the basics, AIDS improves upon the limitations of SIDS, especially in the detection of newer threats. 

### What about WAF?

If IDS/IPS deals with the data on levels 3 and 4 of the OSI model, then WAF deals with data on levels 5, 6 and 7 [(1)](#1). IDS/IPS is not aware of what happens at the higher levels; therefore, it won't be able to make a judgement of a particular network packet based on the user or session. In other words, it can't say "User A is requesting access to web service S. I've seen this user from many previous requests accessing web service T, and historically, this has been a normal user, therefore this traffic is probably fine". The IDS/IPS operates at a lower level, and does not see these things. The WAF, on the other hand, is user, session, and application-aware. WAF is able to keep track of each user requesting access to the web application, along with the opened sessions (Layer 5 is known as the Session Layer) and the details of the application involved, including what services it offers. WAFs are built around the OWASP Top 10 list, which is a list of the most common web application security vulnerabilities. These include injection attacks, cross-site scripting, sensitive data exposure, etc. 

While WAF mainly deals with web traffic (think HTTP/HTTPS), it is also capable of catching odd behavior through other ports and protocols, such as FTP and SMTP. WAF would be able to detect if there are too many login attempts done using FTP, or too many incoming junk email coming through SMTP.   

### What's the conclusion?

The conclusion is that there is no one solution which protects an organization from all types of attacks. More layers of defence within an  organization's network means more security, but it also means slower movement of data. Both defence mechanisms are very important, and it would be unwise to simply depend on one; rather, many defence mechanisms should be put in place to form a more holistic defence against a range of attacks. 

### Notes:

### 1 
A normal (network-based) firewall also operates on Layers 3 and 4. They will take care of IP addresses and ports using Access Control Lists (ACLs). The problem with the typical firewall is that there are attacks which go beyond Layers 3 and 4, i.e. Layers 5, 6, 7. HTTP flood attacks and slowloris attacks (both are DDoS attacks) could be done through allowed IP and ports numbers, hence bypassing the traditional network firewall. The nature of such attacks are not aimed at the network layer, but at the application itself. They can be legitimate HTTP traffic, but still cause harm. 

In reality, if all application were perfectly written, then there would be no need WAFs. Regular firewalls would've been enough. However, the reality is that most web application are either not built and designed with security in mind, or they are legacy application which were once solid, but now are insecure. 