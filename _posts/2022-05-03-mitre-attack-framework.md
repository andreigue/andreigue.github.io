### What is MITRE  ATT&CK?

MITRE, or The MITRE Corporation, is a government funded research organization based in Massachusetts and Virginia. It is a nonprofit group involved in commercial (Microsoft and Fujitsu), as well as top-secret projects for many U.S. governemental agencies in the fields of aviation (the FAA), defense (the U.S. Air Force), health (U.S. Public Health Services), and cyber security. Its cyber-related projects are funded by NIST, or National Institute of Standards and Technology.

ATT&CK (pronounced "attack") on the other hand stands for "Adversarial Tactics, Techniques and Common Knowledge". It is a framework created by MITRE in 2013, describing the entire process of a cyber-attack, from the conception of the attack to the final impact it has on the victim company. It is a way for organizations to understand how a hacker group carries out its actions, i.e. **it show the process from the hacker's point of view**. Today, it is used all over the world, making it the common "language" used by security analysts and industry professionals in general; when a term is used, everyone knows exactly what is meant.

The ATT&CK framework is based on real world observations, and so it is continuously evolving; as attackers use new methodologies, the framework gets updated in order to include these new attack tactics. To convey all the details about attacks, MITRE has created the ATT&CK Matrix. There are two versions of it, but I will simply cover the broader one, known as the Enterprise Matrix. This table has 14 columns (the more basic one has 11), each representing a part of the "attack chain". They are

1. **Reconnaissance**: gathering information to plan future adversary operations, i.e., information about the target organization
2. **Resource Development**: establishing resources to support operations, i.e., setting up command and control infrastructure
3. **Initial Access**: trying to get into your network, i.e., spear phishing
4. **Execution**: trying the run malicious code, i.e., running a remote access tool
5. **Persistence**: trying to maintain their foothold, i.e., changing configurations
6. **Privilege Escalation**: trying to gain higher-level permissions, i.e., leveraging a vulnerability to elevate access
7. **Defense Evasion**: trying to avoid being detected, i.e., using trusted processes to hide malware
8. **Credential Access**: stealing accounts names and passwords, i.e., keylogging
9. **Discovery**: trying to figure out your environment, i.e., exploring what they can control
10. **Lateral Movement**: moving through your environment, i.e., using legitimate credentials to pivot through multiple systems
11. **Collection**: gathering data of interest to the adversary goal, i.e., accessing data in cloud storage
12. **Command and Control**: communicating with compromised systems to control them, i.e., mimicking normal web traffic to communicate with a victim network
13. **Exfiltration**: stealing data, i.e., transfer data to cloud account
14. **Impact**: manipulate, interrupt, or destroy systems and data, i.e., encrypting data with ransomware

Here they are in more detail:

![ATT&CK Matrix](..\images\att&ckMatrix.png)

Every column, i.e. the (possible) phases of the attack, have a number of techniques which the attackers are capable of using while attempting that specific phase of the attack. Although not directly shown in this matrix, a lot of the techniques also have sub-techniques, i.e. more details about what could specifically happen. Those are the techniques in the matrix which have a small number next to them, and a dark grey highlighting on the side with two white lines in it. Those would normally be clickable and expandable if they were not in an image format. Here is an example:

![Phishing technique broken down further](..\images\IA phishing_subtechn.png)

![ATT&CK Matrix possible flow](..\images\attack_flow.png)


### What is the difference between MITRE ATT&CK and the Lockheed Martin Cyber Kill Chain?

Both are frameworks designed in order to understand adversarial behavior throughout a cyber attack. 
The Cyber Kill Chain lays out a higher level framework than ATT&CK: reconnaissance, weaponization, delivery, exploitation, command and control, and actions/executions. It doesn't get into specific details of tactics (the "what") or techniques (the "how"). And because it is not specific, it does not get updated like the MITRE ATT&CK framework does.




---

### Sources:

<https://www.trellix.com/en-us/security-awareness/cybersecurity/what-is-mitre-attack-framework.html>


### Photo Credit:

<https://www.f5.com/labs/articles/education/mitre-attack-what-it-is-how-it-works-who-uses-it-and-why>