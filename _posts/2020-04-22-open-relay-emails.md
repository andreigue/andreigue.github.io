---
tags: [Technology]
Title: The First Real Spammers
header: 
    image: #"/images/rockefeller.jpg"
    excerpt: "History, Technology"
---

If you go to the "about" section of my website, you can see me kindly asking my lovely readers and passerbys, to not DDoS me. I'll leave the explanation of DDoSing for another time... but speaking of time, if I were to write my "about" page in the 1980s, I would say "thou shalt not send me an open mail relay spam me, sire". Kidding with the archaic language, not kidding with the spam. Let me explain.

Back in the days, if a spammer wanted to send spam emails to random people, he would do it through his own email account, and through his own ISP. Once the recipients of those emails started to complain, the ISP of the spammer would shut his account down. A better way to do this, spammers realized, is to use third-party computers/servers. This would allow them to hide their identity, since the email didn't come directly from them. That's what open relays allowed for.

Open email relays were simple mail servers, that would take an email, and forward it on. The catch is that they allowed anyone on the Internet to send emails to people they didn't know, on mail servers they didn't know about. This may not be a shocker to us today (we always receive spam emails), but back then, there was nothing like it. It was a first. Who managed these servers that would pass emails on for free? They were simply programmers who ran mail server softwares ([see the list of those in existence today](https://en.wikipedia.org/wiki/List_of_mail_server_software)[(1)](#1)), where the default configuration would be to pass along messages sent to it from any location, and to any recipient (this was back in an era which saw a high rate of conduct on the Internet, i.e. people behaved and didn't try to abuse the system). The servers used the original Simple Mail Transfer Protocol [(2)](#2) (or SMTP), which differs from today's version of SMTP by the fact that they didn't do any sort of authentication of the sender back then.  

Not surprisingly, spammers took advantage of this system and absued it. Open relays allowed them to reroute their emails through third-party email servers to avoid being detected and to use the large resources and capabilities of these open relay servers. What the spammers did was basically send one email which would contain a huge bcc (blind carbon copy) list to the open relay server, which would in turn sent that one email to everyone in the bcc list. 

Open relays were started to be frowned upon by the tech community because of this increase in abuse of the system. Detection methods were starting to appear in order to block the spam emails sent through open relays. This was easy to do because the blind carbon copies would create exact replicas of the email, and this was easy to detect. ISPs used hash filters to detect the emails sent in bulk. What these filters would do is create a hash sum by using a hash function. Hash functions take an input (an email in this case), and outputs a unique degital fingerprint for that input. If you were to change one little thing in that input/file/email, then the hash function will output something completely different. This output is called a hash or a hash value [(3)](#3). So once an email is "summed up" into a hash value, that value can be compared with the values of other emails, and if they are the same, then it can be concluded that the same email was sent multiple times, and therefore it is likely spam. 

In order to bypass this, spammers started using hash busters. These were programs which would randomly add characters to emails in order to change that email's hash sum, which would in turn, differentiate its hash value which the filters gave for every email, thus making them seem different to the filters. However, this defeated the purpose of using an open relay, because every copy of spam was "unique" and had to now be sent individually. 

Nevertheless, by the year 2003, most ISPs blocked any incoming emails sent from (or through) open relays (even if they were legit). The percentage of email senders that were open relays dropped from 90% to 1%.  

At that point, it was unofficially declared that a properly secured SMTP mail relay should not accept and forward arbitrary e-mails from non-local IP addresses to non-local mailboxes by an unauthenticated or unauthorized user.

In the modern age, a common practice done by spammers is to automate (through a computer program) the creation of email accounts, where each one would send spam mail. The email services have caught up to this technique, and adopted the Captcha system[(4)](#4), which a simple botnet would not be able to pass (and hence blocking the automatic creation of email accounts). With AI, this too shall pass.

===


### Notes:
### 1
Note that email providers such as Yahoo Gmail and Outlook simply implement these softwares and take care of the hosting. All the emailing 
### 2
The Simple Mail Transport Protocol is a protocol governing email transmission and reception (sending and receiving emails between mail servers).
### 3 
Actually, barcode numbers use a similar concept. The last digit of an ISBN (International Standard Book Number) [(as shown in this video by Numberphile)](https://www.youtube.com/watch?v=sPFWfAxIiwg) is used as a  "check number", i.e. a number which makes sure that the rest of the digits were correctly typed. It's a number that legitimizes the rest of the code. For example, if you were to change one digit in the ISBN, it wouldn't be a valid one. That last "check digit" would also have to be changed to a specific number in order to make the entire code be a legit one. This is better explained in the Numberphile video I linked above, or the [wikipedia page](https://en.wikipedia.org/wiki/Check_digit).

### 4
CAPTCHA stands for "completely automated public Turing test to tell computers and humans apart".



### References:

<https://en.wikipedia.org/wiki/Spam_email_delivery>
<https://en.wikipedia.org/wiki/Open_mail_relay>
<https://en.wikipedia.org/wiki/Hash_buster>
<https://en.wikipedia.org/wiki/Hash_filter>

