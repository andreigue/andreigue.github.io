---
title: "Bitcoin Part 1.1: Reading the Whitepaper"
tags: [Technology]
---

#### _This is the fifth article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._

Before we move any further on facts, I wanted to share some of my thoughts/concerns so far about the blockchain, based on my current understanding of it.

----------------------------

Given that the blockchain is a decentralized network of nodes, and all data stored on it is public record, can blockchain be used to replace every company which acts as a mediator in contracts? Say, for example, purchasing a house. Rather than signing the purchase agrement by hand, sending a copy to the attorney, and having him/her verify everything, why not get rid of the middleman, and do things in a peer-to-peer fashion, with all transactions stored on some blockchain? We'll have a tokenized version of ownership.

On paper this looks fine. I will now have indisputable proof that I am the owner of my property. However, while the fact that this data point is stored in the thousands of nodes which constitute the blockchain is what makes it secure and indisputable, this also means that everyone has access to this information. This information is public record. And now we have to wonder that maybe certain information shouldn't be out in the wild.

If we expand blockchain's reach into other aspects of our lives, then anyone would be able to read/estimate how much money we have, where we visit, who we chat with, which airlines we use, which movies we watch, so on and so forth. Would you rather Netflix see and analyze your watching patterns, feed the data into their AI tools and show you new movie recommendations, or would you rather have anyone with access to the blockchain see which movie you watched yesterday? Because at the end of the day, everything you do on the blockchain leaves a permanent mark and can be traced back to you.

If the Facebook-Cambridge Analytica scandal taught us anything, it's that ordinary civilians are uncomfortable and frustrated with how their personal data is shared left and right without their consent. People clearly value privacy and control over their data.

Therefore, while blockchain technology offers many benefits, it is important to recognize its limitations when it comes to storing sensitive information.

The blockchain, in its current form, is just a bunch of wallet addresses with transaction information, which gives the impression of anonymity. However, advancements in blockchain technology may lead to measures that allow names to be associated with wallet addresses for convenience purposes. So we will see that Jimmy sent 0.0002342 BTC to Walmart, rather than 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2 sent 0.0002342 BTC to qmFn3g5um4F7JNNKJ234kn492dd. Just like we don't write 142.251.46.174 to access the Google search page. We enter www.google.com. Convenience. ([1])(#1)

Also, Satoshi said nothing about anonymity. The transactions on the Bitcoin network are public, but they are pseudonymous, meaning that the identity of the users behind the transactions is not directly revealed.

That is not to say that blockchain technology is useless in all fields. It seems to me like the fields with sensitive data are going to be hard-to-reach, however take for example IP, Intellectual Property: blockchain can be used to store contracts related to the licensing or sale of intellectual property, such as patents, trademarks, and copyrights. Just like an NFT is a proof of ownership of a work of digital art, IP information can be made public (maybe, I'm no expert). 

Basically I'm saying that sometimes you need to sue the person on the other end of a contract or a transaction, and blockchain doesn't allow for that. I'd argue that a lot of people would rather use fiat currency, with all of its flaws, and have some certainty that tthe legal system will back them up if need be.

---

### Notes:

### 1
To be fair, there are reasons why we don't use a convenient naming system. For starters, a naming system would require some form of centralized authority to maintain a mapping between names and addresses, and the whole point of Bitcoin is to avoid creating any centralized points of control. Furtheremore, a naming system could potentially be a target for attackers looking to compromise the system. If an attacker gained control of the naming system, they could potentially redirect transactions to their own addresses or cause other types of disruption. And finally, anything added on top of the Bitcoin blockchain adds a new layer of complexity which developers will have to maintain and update.

There is a 10-year-old project called NameCoin [https://www.namecoin.org/dot-bit/] however which does what DNS servers do, but on the blockchain. Learn more by visiting the link.