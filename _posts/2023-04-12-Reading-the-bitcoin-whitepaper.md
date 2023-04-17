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

_"We define an electronic coin as a chain of digital signatures."_

 A digital signature is a way to prove that you own the private key

I gave an introduction to digital signatures in the previous article, but for more details on that check note ([2])(2).

But briefly, if I "digitally sign" something, that's a proof that I own the private key, which no one else is going to have. So everyone in the world can see a message that has my digital signature and be able to confirm that I signed it. 

_"Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin."_

![trees](..\images\btc\img1.PNG)

---

### Notes:

### 1
On a personal note, it's interesting that Satoshi is so adamant about the fact that the buyer can screw the seller over, and that reversibility of transactions is terrible. We can easily argue against this and say that someone can accidentally send Bitcoin to the wrong address, and would need to reverse the transaction. Or if I purchase a product or service, send the money, but the product or service does not meet my expectations, in which case I'd get screwed over.

### 2
In the second article of the series I explained how a digital signature can be made using your private key... sort of. To be honest, I didn't tell the whole story. I just said how you can use your private key to sign a message by encrypting that message, and anyone with your public key can unencrypt the message to see that you encrypted it, proving that it went through you. Read on to learn how signing actually happens.

Assymetric encryption has its pros and cons. One big "con" is that is that it's a slow process, compared to its "symmetric counterpart (which we didn't discuss about, but it doesn't matter); the mathematical algorithms are more computationally complex and the keys themselves are also more lengthy. Given these two facts, encrypting an entire message is costly. If only there was a way to instead work with a smaller representation of the data (like a fingerprint of the message), then we'd be able to encrypt that instead. Well, there is a way to convert any amount of data into a fixed, relatively small representation of that data, and it's called hashing.

Ann writes a message. She then runs her message through a hashing algorithm (SHA256 in the case of Bitcoin). The result will be some 256-bit (64 hexadecimal characters, which is what I showed in the previous article) called a hash, or digest. Now Ann is going to encrypt (with her private key) that message digest, and the result of that will be the encrypted digest. This encrypted digest is the signature for this particular message; it will be appended to the message and sent off to Bob. So now Bob will use Ann's public key to verify the signature. More specifically, Bob will unencrypt the encrypted message digest, and the result will be the message digest. Then he will independently generate the hash of the message itself, and if his calculated hash is the same as the hash which he unencrypted from Ann, then he knows two things: the message has not been tampered with since it has been signed by Ann (known as "integrity"), and Ann was the one to sign the message (property of "authentication").