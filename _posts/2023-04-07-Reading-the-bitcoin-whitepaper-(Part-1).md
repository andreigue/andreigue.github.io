---
title: "Bitcoin Part 0: Technical Prerequisites"
tags: [Technology]
---

#### _This is the second article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._

----------------------------

## Encryption and digital signatures

In the world of cryptography, there is something called "public key cryptography", a.k.a. "asymmetric cryptography". Since this is used in the blockchain, let's go over it.

When you open a Bitcoin wallet, you are given a private key. This "private key" is what you will use to prove to others that you are who you say you are. It is private, and only you should have it. Once the private key is generated, a public key is derived from it mathematically (using Elliptic Curve Digital Signature Algorithm, or ECDSA). This one is public, and so everyone can have access to it. Any message encrypted with the private key can only be decrypted with the corresponding public key, and, similarly, any message encrypted with the public key can only be decrypted with the corresponding private key.

This pair of keys can make two things happen (depending on which one is used to encrypt):

1. Let's say Ann wants to send Bob a secret message. Ann wants only Bob to be able to read it. To do that, she will take Bob's publicly available public key, and encrypt her messsage. The message is now encrypted. The only way to unencrypt the message, is to use the private key associated with the public key used to encrypt the message; Ann used Bob's public key to encrypt the messsage, and so only Bob's private key can be used to decrypt the message. Luckily, only Bob has access to his private key, which means that only Bob can decrypt and read the secret message. In cybersecurity, this is called "data confidentiality"; this is the idea that the data is only accessible to the intended recipient.

2. Let's say Ann wants to send Bob a message, but the message isn't secret. In other words, she doesn't care if her message gets intercepted and read by someone else. Confidentiality is not of a concern to her. However, Ann wants to prove that she wrote the message. She wants to add her "signature" on the message. So what Ann will do is write the message, encrypt it with her private key, send it to Bob, and if Bob can successfully decrypt the message using Ann's public key, that proves that Ann was the sender of the message. This is what is known as "authentication". The only key that could've encrypted the message was Ann's private key, which is only in Ann's possession. On top of "authentication", this also proves "data integrity", i.e. the message has not been tampered with while in transit. Why is that the case? Because if someone were to capture Ann's message and change its content content (since everyone has access to her public key), when Bob will try to decrypt the message with Ann's public key, it would result in gibberish. If Bob is successfully able to decrypt the message with Ann's public key, this proves that the message was encrypted using Ann's private key, and only Ann has access to it. Effectively, Ann signed her message, thus providing both authentication and integrity. 

In summary, you can't just say "Hey, this is Bob, and I am sending Ann 5 BTC" because anyone could make that claim. Instead, you use your private key to generate a digital signature that proves that you are the legitimate owner of the funds being sent, and that you authorized the transaction.

And finally, the reason why this "public key cryptography" method works is due to the fact that the public/private key pair creation is a one-way street: it is easy to generate a public key from a private key, but it is practically impossible to generate the private key from the public key[(1)](#1). Effectively, no one can pretend that they are Ann. The day that computers will be able to derive the private key from the public key, Bitcoin (and all secure communication protocols), will become insecure and be worthless [(2)](#2).


## Hashing

Hashing is the process of converting data of any size into a fixed-size string of characters, which is a unique representation of that data. The Bitcoin blockchain uses a hashing algorithm called SHA-256 (SHA stands for Secure Hash Algorithm). 

SHA-256 is used in several different parts of the Bitcoin network:
    
    1. Mining uses SHA-256 as the Proof of Work algorithm.
    
    2. SHA-256 is used in the creation of bitcoin addresses to improve security and privacy. (Source: 1)

We'll get into the details of how hashing is used in the next article.

## The double-spending problem

When you put your house on the market, and a bunch of buyers come in to take a look, what stops you from telling Buyer A that you are selling him the house, and the next day telling Buyer B that you are selling her a house? So I would get the money from both Buyers, disappear, and let them deal with the mess. Well, I can't do that because when I sell the house to Buyer A, even though I'm not physically giving the house to him, the government keeps records of the ownership transfer. Every home purchase/sale is backed by records in a database which is ran by some government agency (the land registry office(?)). 

In the example, the government (as well as mortgage lenders, attorneys, brokers) act as middlemen in order to ensure that the land/property transfer goes smoothly (and legally). 

But what if there was no middlemen? Well, then, maybe I would be able to lie to Buyer A and B, and get double the money.

With Bitcoin however, there is no trusted third-party to oversee transactions. For that simple reason, the double-spending problem exists. And this problem had no solution, until Bitcoin showed up! 

Simply put, the blockchain works through a concesus mechanism where the majority of miners legitimize a transaction as valid. If you want to double-spend your bitcoin, you'll have to convince at least 51% of the miners in the world to jump on board with your plan. And even if you do convince them (if you somehow manage to find them), it's still not that simple.

Bitcoin provides secure, transparent, and immutable record-keeping, all without the need for centralized intermediaries! Consider other aspects of our lives. For example, when you buy a home, a real estate agent tags along for the ride with you, acting as a middleman between you and the seller. But can you look for homes and figure things out on your own? Sure you can, there's no need for a middleman. But there are pros and cons to both methods. 

Real estate agents have access to a wealth of knowledge and resources, including comprehensive databases of properties for sale, experience with negotiating deals, and knowledge of the local market (hopefully all, but you have to trust them). They can provide valuable guidance throughout the home-buying process and help you avoid costly mistakes. However, their services come at a cost (in the form of a commission fee). 

Similarly, Bitcoin's decentralized and trustless system offers many benefits, such as increased transparency, security, and reduced fees. However, it also requires a certain level of technical expertise and responsibility on the part of the user to ensure the safety and security of their funds. It's definitely not for my grandmother.


---

### Note:

### 1
Not only are quantum computers needed to break ECDSA, but the ones we have today are very far from being able to break this cryptographic algorithm. It is estimated that a quantum computer of around 2000-4000 high-quality qubits would be necessary to break Bitcoin's cryptography. Today's most powerful quantum computer operates at 433 qubits (IBM's Osprey). However, it's important to note that the number of qubits alone is not necessarily the only factor in determining a quantum computer's overall computational power (hencce why I previously wrote "high-quality" qubits).

Also I would like to mention that while quantum computers are developing, so too are the encryption techniques. If quantum computers will one day be able to break today's cryptography, then maybe they can be used to retrieve the coins of those wallets that are lost or forgotten, and all active wallets can be upgraded in their encryption, as to not be vulnerable to quantum computers. It can be like mining Bitcoin in the years after 2140, when there will be no more new Bitcoin to mine, and so companies can develop quantum computers with one incentive being the mining of "lost" Bitcoin.

### 2
As I've once heard said, "when Satoshi's coins move, we will know that quantum computers have become powerful enough to compromise the security of Bitcoin", or something along those lines. 
