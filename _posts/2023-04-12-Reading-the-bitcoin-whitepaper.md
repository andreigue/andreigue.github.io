---
title: "Bitcoin Part 1: Reading the Whitepaper"
tags: [Technology]
---

#### _This is the third article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._


In this article, I will use the pronouns "he/him" to represent Satoshi Nakamoto, not because I am assuming his/her/their gender, but because it will make things simpler. Satoshi is more likely to be a group of people (they always use "we" in the whitepaper), but I will assume for simplicity that it is one person (because it sounds like one person).

----------------------------

# Reading the Bitcoin whitepaper

I think the right and honest way to introduce Bitcoin is by going back to the paper that started it all: the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf). Now that we have the prerequisites covered, we can dive into the paper.

# 1. Introduction

In the introduction to the Bitcoin whitepaper, Satoshi Nakamoto describes the problem of having to trust intermediaries in financial transactions, as well as the problem of reversible transactions, where a fraudulent buyer could initiate a transaction, receive the goods, and then initiate a refund to get the money back, leaving the seller without the goods or the payment. [(1)](1)

His solution: "a peer-to-peer distributed timestamp server to generate computational proof of the chronological order of transactions. The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes".

![trees](..\images\Server-based-network-vs-Peer-to-Peer-network-Digital-Impact-Labs-2017.png)

And regarding the merchant/buyer, he writes _"Transactions that are computationally impractical to reverse would protect sellers from fraud, and routine escrow mechanisms could easily be implemented to protect buyers"_. I doubt he mentions anything more about setting up these "routine escrow mechanisms", but let's read on. The point here is that once something is on the blokchain, it's permanent.

# 2. Transactions

So how will transactions work on this network? 
###### _"We define an electronic coin as a chain of digital signatures."_

I gave an introduction to digital signatures in the previous article, but for more important details on that, check note ([2])(2).

But briefly, if I "digitally sign" something, that's a proof that I own the private key, which no one else is going to have. So everyone in the world can see a message that has my digital signature and be able to confirm that I signed it. 

##### _"Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin."_

This means that when a Bitcoin transaction takes place, the current owner of the BTC "coin" (i.e. the person who holds the private key to access it) digitally signs a hash of the previous transaction and the public key of the next owner. This digital signature serves as proof that the current owner is indeed authorized to transfer ownership of the coin.

![trees](..\images\btc\img1.PNG)

Thus, we get a "chain of digital signatures" from all the owners of the coin(s) being transferred (one new owner at a time). And this chain of owners is permanent, so if a hack or illegal activity has occurred and some of that Bitcoin ends up in your possession, law enforcement may be able to trace the transactions and seize the Bitcoin as part of their investigation ([(3)](3)).

So far, there is nothing revolutionary. Using digital signature is old news.

#### _"The problem of course is the payee can't verify that one of the owners did not double-spend the coin. A common solution is to introduce a trusted central authority, or mint, that checks every transaction for double spending."_ 

This is something we want to obviously avoid. And the fact that Bitcoin solved this problem is one of the many reasons why it is so revolutionary ([4])(4).

I don't know your thoughts on this double-spending problem, but I was a bit confused at first. How hard can it be to keep track of who owns what? Why not just give me my private key (my wallet), and have a pointer pointing from my wallet to the Bitcoin that I own. We learn the concept of pointers early on in our C/C++ class early on. What's the problem?

Well, the problem is that I'm still thinking inside the box. This approach would require a trusted central authority to maintain a database of all Bitcoin ownership records, and this would defeat the purpose of Bitcoin's decentralized and trustless nature. The truth is that hindsight is 20/20; the blockchain's concept may seem obvious now, but in reality it is revolutionary. Let's read on to see Satoshi's solution.

#### _"The only way to confirm the absence of a transaction is to be aware of all transactions. In the mint based model, the mint was aware of all transactions and decided which arrived first. To accomplish this without a trusted party, transactions must be publicly announced, and we need a system for participants to agree on a single history of the order in which they were received. The payee needs proof that at the time of each transaction, the majority of nodes agreed it was the first received. "_



---

### Notes:

### 1
On a personal note, it's interesting that Satoshi is so adamant about the fact that the buyer can screw the seller over, and that reversibility of transactions is terrible. We can easily argue against this and say that someone can accidentally send Bitcoin to the wrong address, and would need to reverse the transaction. Or if I purchase a product or service, send the money, but the product or service does not meet my expectations, in which case I'd get screwed over.

### 2
In the second article of the series I explained how a digital signature can be made using your private key... sort of. To be honest, I didn't tell the whole story. I just said how you can use your private key to sign a message by encrypting that message, and anyone with your public key can unencrypt the message to see that you encrypted it, proving that it went through you. Read on to learn how signing actually happens.

Assymetric encryption has its pros and cons. One big "con" is that is that it's a slow process, compared to its "symmetric counterpart (which we didn't discuss about, but it doesn't matter); the mathematical algorithms are more computationally complex and the keys themselves are also more lengthy. Given these two facts, encrypting an entire message is costly. If only there was a way to instead work with a smaller representation of the data (like a fingerprint of the message), then we'd be able to encrypt that instead. Well, there is a way to convert any amount of data into a fixed, relatively small representation of that data, and it's called hashing.

Ann writes a message. She then runs her message through a hashing algorithm (SHA256 in the case of Bitcoin). The result will be some 256-bit (64 hexadecimal characters, which is what I showed in the previous article) called a hash, or digest. Now Ann is going to encrypt (with her private key) that message digest, and the result of that will be the encrypted digest. This encrypted digest is the signature for this particular message; it will be appended to the message and sent off to Bob. So now Bob will use Ann's public key to verify the signature. More specifically, Bob will unencrypt the encrypted message digest, and the result will be the message digest. Then he will independently generate the hash of the message itself, and if his calculated hash is the same as the hash which he unencrypted from Ann, then he knows two things: the message has not been tampered with since it has been signed by Ann (known as "integrity"), and Ann was the one to sign the message (property of "authentication").

It is important to see how a digital signature isn't like a signature we write by hand. A signature by hand is going to be the same (or at least very similar) every time, while a digital signature will change every time, as long as the messages are different.

### 3
Of course they would have to follow proper legal procedures and obtain a warrant or court order to seize any assets, including Bitcoin. And if you acquired the Bitcoin through legitimate means and were not aware of any illegal activity, you may have legal options to contest the seizure. That being said, if you went into some underground market to acquire these Bitcoins at a price lower than the market price, wel then you were likely in the receiving end of Bitcoin "dumping", i.e. those Bitcoins were likely acquired illegally and the person is just trying to get rid of them quickly. That's why it's always best to buy and sell Bitcoin through legitimate, regulated exchanges.

### 4
Other reasons why it's revolutionary are: decentralization (maintained by a global community of users), transparency (anyone with an internet connection can access it and inspect it), immutability (this is important if you want to be trustworthy), limited supply (different from any other currency like fiat currency or commodity like gold), and it is programmable (open-source software that can be used for other more complex applications requiring blockchain tech).