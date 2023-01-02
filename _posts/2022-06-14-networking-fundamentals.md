In order for two computers to communicate, they  must somehow be connected to each other. Today, we take it for granted that I can buy a Lenovo laptop, and it has the ability to join the internet and communicate with your Asus PC right out of the box. Lenovo and Asus don't have a special partnership in order to make this happen. All they have to do is build their devices such that they follow world-wide accepted protocols for communucation.

### Some history

Once upon a time (1960's), two devices made by two different companies could not talk to eachother. There was no standard way to communicate between networks, operating systems, and computers. IBM was working on their own proprietary network design and OS, allowing an IBM machine to only talk to another IBM machine. Note that packet switching was starting to become a prevailent idea [(1)], just missing the step from theoretical to practical in order to combat the older circuit switching technology.

The International Organization for Standardization (ISO) recognized this problem, and created a template/model called (somewhat confusingly) the Open Systems Interconnect (OSI). The OSI model is simply a guide and didn't explain the "how". 

As it turned out, the OSI model wasn't the only model proposed during the period. The U.S. Department of Defense (DoD) was also developing its own communication protocol, now known as the Transmission Control Protocol/Internet Protocol suite, or TCP/IP [(2)]. More specifically, it was ARPA (Advanced Research Projects Agency), today known as DARPA (Defense ARPA), through partnerships with universities and various research groups, that developed the predecessor to the modern Internet. It was named ARPANET, and it was the first ever implementation of packet-switching (the year is 1969). 

![Four intial participants](..\images\arpanet.png)
[https://www.historyofinformation.com/detail.php?entryid=3823](https://www.historyofinformation.com/detail.php?entryid=3823) [(3)]

Although the initial protocol used was the Network Control Protocol (NCP), throughout the 1970's, Vint Cerf and Robert Kahn (today known as the fathers of the Internet) researched on packet network interconnection protocols and co-designed the TCP/IP protocol suite together. 

On January 1, 1983, ARPANET has officially transitioned from to the more flexible and powerful TCP/IP protocol suite, marking the start of the modern Internet. Hence, this day is considered the official birthday of the Internet! 

Meanwhile, what was known as the ["protocol wars"](https://en.wikipedia.org/wiki/Protocol_Wars) were coming to an end. As more vendors and institutions chose to go with the protocol that the DoD was backing, no one had shown a proof of concept for the OSI model. 









https://www.youtube.com/watch?v=m4uzeX-ChFw
DHCP, DNS, etc etc

https://www.reddit.com/r/explainlikeimfive/comments/1xijs5/eli5_why_do_ip_addresses_end_in_255/





### How to computers communicate with each on the LAN?
when was lan created
### What is a switch?


### Notes:

### 1 
While the circuit switching infrastructure was already in place thanks to the telephone lines,  it really wasn't clear how to build a packet switching system. Packet switching basically entails sending a message in parts, through potentially different routes, and reassembling that message in the correct order at the destination. This technology has numerous benefits over the old technology, some of which are enabling the more efficient use of existing communication channels and being faster. On the other hand, circuit switching used a dedicated communication line between two parties. This meant that the entire channel was busy, even if it wasn't being used to its full capacity by the two parties.

### 2
It's interesting how so many (if not all) major technological advancements have originated in the defence sector. As the Cold War was escalating, in 1957, the USSR managed to send the first man-made satellite into orbit, called Sputnik (which is the russian word for "satellite"). The US followed suit a year later. That same year, President Dwight D. Eisenhower created the National Aeronautics and Space Administration (NASA), a federal agency dedicated to space exploration. ARPA (today known as DARPA) was also created that year. It was in 1961 that Yuri Gagarin of Russia became the first person to orbit the Earth inside Vostok 1 (which is the russian word for "East"). At this point, no one knew the implications of the space race, but the US was planning for the worst case scenario: a nuclear attack. And hence developing an efficient communication protocol from coast to coast was important. 

### 3
The four initial participants involved were: UCLA (University of California, Los Angeles), the Stanford Research Institute (SRI), UCSB (University of California, Santa Barbara), and the University of Utah.


### Sources:
[https://en.wikipedia.org/wiki/Protocol_Wars](https://en.wikipedia.org/wiki/Protocol_Wars)
[https://www.usg.edu/galileo/skills/unit07/internet07_02.phtml#:~:text=January%201%2C%201983%20is%20considered,Protocol%20(TCP%2FIP)](https://www.usg.edu/galileo/skills/unit07/internet07_02.phtml#:~:text=January%201%2C%201983%20is%20considered,Protocol%20(TCP%2FIP))
[https://www.history.com/topics/cold-war/space-race](https://www.history.com/topics/cold-war/space-race)
[https://en.wikipedia.org/wiki/ARPANET](https://en.wikipedia.org/wiki/ARPANET)
[https://en.wikipedia.org/wiki/Network_Control_Protocol_(ARPANET)](https://en.wikipedia.org/wiki/Network_Control_Protocol_(ARPANET))




