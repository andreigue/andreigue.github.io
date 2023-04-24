---
title: "Bitcoin Part 1.1: Continuing Reading the Whitepaper"
tags: [Technology]
---

#### _This is the fourth article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._

----------------------------

# 4. Proof-of-Work

In the previous section, we saw how one block's identity is determined by the previous block, and the previous block's identity is determined by the block before it, so on and so forth. All blocks are linked, and a change in a block from the past will cause an error in the hash values of all the future blocks. Ok good.

Now what if I am someone with malicious intentions. Going back to the "corporate" example, where a company will publish all its log files at the end of a day, and combine those into a block and do the same thing for the rest of the workweek. If it is Friday, and I want to go back to Monday's records and change something there. If we are using timestamping, as we discussed, if I change something on Monday, then the hash values of Tuesday's, Wednesday's, Thursday's and Friday's blocks will change, and the whole system will break. So what I can do, before anyone has the time to check that I broke the system, is I can recalculate the hash values of all the blocks following Monday. Because in reality, calculating a hash value of something takes less than a second. 

So to make this harder, Satoshi introduces the concept of "proof-of-work". The main idea here is that in order to add/modify a block, it cannot be easy. It must be hard. To make a link between two blocks should not be as simple as running a hash function once. So if I change something on Monday, therefore breaking all the links going up to Friday, it will be hard for me to recalculate everything in a way that it works mathematically. It will be hard for me to go to other people, and tell them "I swear, this is the right sequence of blocks, not that one".

And this is a problem that arises with decentralization. Because if a central authority was running the show, then they'd just have one chain. Only they have access to it, and so there is one truth. However, when dealing with people all around the world, anyone can come forth and say "this person owes me this much, look at this chain!".

![trees](..\images\btc\img3.PNG)

So let's say we have a transaction Tx. A transaction will replace what we called "items" in section 3. Also, inside the block, we're going to have the hash of the previous block, and a "nonce" ("Number used ONCE"). 

##### _"The proof-of-work involves scanning for a value that when hashed, such as with SHA-256, the hash begins with a [certain] number of zero bits. The average work required is exponential in the number of zero bits required and can be verified by executing a single hash._

We concatenante all the transaction with the hash of the previous block, and with the nonce. We then take the hash value of that. The proof-of-work system asks us to find the value of the nonce such that the resulting hash will start with, say, ten 0's. This is not easy to do; out of the 64 hexadecimal characters, the first 10 must all be 0's. Once you find a nonce which will yield that result, then you have PROVEN that you have done the WORK. Furthermore, others can verify that you have done the work very easily; all they have to do is take the nonce that you found, plug it in, calculate the resulting hash, and if they get a hash where the first 10 characters are all 0's, then they have verified your work. [(1)](#1)

##### _For our timestamp network, we implement the proof-of-work by incrementing a nonce in the block until a value is found that gives the block's hash the required zero bits. Once the CPU effort has been expended to make it satisfy the proof-of-work, the block cannot be changed without redoing the work. As later blocks are chained after it, the work to change the block would include redoing all the blocks after it._

Essentially, "bitcoin mining devices" are just calculating hashes all day long (simply changing the nonce each time), and once they get a winning hash, they announce it. The first to find a correct nonce wins! It's not too different from playing the lottery if you think about it. And just like if you buy more tickets, your odds of winning increase, a node/miner (person participating in the blockchain) has more chances of finding the right nonce if he/she has more CPU power. As Satoshi writes, "_Proof-of-work is essentially one-CPU-one-vote_". 

#### _The majority decision is represented by the longest chain, which has the greatest proof-of-work effort invested in it. If a majority of CPU power is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains. To modify a past block, an attacker would have to redo the proof-of-work of the block and all blocks after it and then catch up with and surpass the work of the honest nodes._

Let's say there is a group of malevolent miners (nodes) (people who are trying to find a right nonce) who control more than 51% of the total computing power (a.k.a. the hash rate) of the network. Then what this group can do is create an alternative chain of blocks (with a different transaction history), mine those faster than the rest of the "good" miners are mining their legitimate chain, and then once the fake chain is longer than the legitimate chain, everyone on the network will adopt the longer chain. This is how the proof-of-work system works: the chain which has the most work put into it will be the one that the nodes agree is the legitimate chain. This is called the 51% attack, and it is considered to be a serious threat to the security and integrity of the Bitcoin network, but it is also increasingly difficult and expensive to carry out as the network grows and more participants join.

# 5. Network

# 6. Incentive

Now, why would anyone put up with running a node? Why should I spend money to buy computer hardware, or an ASIC (Application-Specific Integrated Circuit) miner, and spend money on electricity, in order to validate blocks on the blockchain? As it turns out, there is an incentive.




---

### Notes:

### 1
Historically, CPU power has largely followed Moore's law, which predicts that the number of transistors on a microchip doubles approximately every two years, resulting in a significant increase in processing power.
Processing power has historically followed Moore's law, which says that the number of transistors on a microchip doubles approximately every two years, resulting in a significant increase in processing power. Although it is unlikely that the trend will continue for long (due to physical limitations), the idea is that processor speed is always increasing.

So if 10 years ago the network required you to find a hash with five 0's, with today's computational power, five 0's is a joke. The number of 0's keeps increasing to keep it difficult to find the winning hash. In fact, the system is set up so that the number of leading 0's is equivalent to whatever will make someone find the right nonce in about 10 minutes. So it depends on the "hash rate" of the network. If a block was generated in 8 minutes one time, then the next block will increase in difficulty.  