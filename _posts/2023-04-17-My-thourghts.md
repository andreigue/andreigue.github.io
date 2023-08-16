---
title: "The Bitcoin Whitepaper: My Initial Thoughts"
tags: [Technology]
---

#### _This is the fifth article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._

Before we move any further on **facts**, I wanted to share some of my **thoughts**/concerns so far about blockchain and Bitcoin, based on my current understanding of it.

----------------------------

From my understanding (not just by reading the whitepaper), Bitcoin is a digital asset used as a store of value (rather than being a currency). Similar to gold, but without any industry applications... but it's much more divisible. And portable. And hideable... but at the same time it can't be used in jewelry, nor in electronics, nor in dentistry, nor in aerospace (gold is used to coat certain satellite components to protect them from solar radiation, pretty cool eh?). [(1)](#1)

Bitcoin. It's value comes from the fact that there are other people who would buy it. If the price goes down to 20k, there will be people who will think "that's a steal". If the value goes up to 60k, there will be people who will start to sell. Maybe in a near-distance future, the price range won't be ±40k, but will start to settle down. But who knows. Because honestly, how do we put a number on this protocol? A bitcoin is definitely worth something, but to put an exact number on it makes no sense. While we can read a company's balance sheet, look at its expected sales, etc. and deduce an approximate valuation, it's a bit harder to put a number on transaction rules which are enforced by thousands of nodes around the world, all using up electrical power in order to sustain the system full of strangers whom they've never met before. It's truly a beautiful invention, but it's hard to pinpoint its intrinsic value.

In some sense you can argue that its intrinsic value is meant to slightly keep increasing due to its (slightly) deflationary nature. However, that assumes that interest levels (of the people, not the monetary policy tool) stay constant, or better yet, rise, among the general population. And that's not too hard to see happen. Since once you get Bitcoin, you can't "un-get" it. Once you see the beauty of it, you can't unsee it. The true fan club (and not those people in it to make a quick buck) can only grow (this growth can be stunted by external factors such as governmental regulations, as mentioned in the next paragraph).

However, despite all this positive talk, and despite me thinking that Bitcoin is a beautiful creation, I think that a big part of Bitcoin's and other cryptocurrencies price appreciation is due to hype and people trying to make a quick profit, RATHER THAN being tied to a fundamental demand for the underlying technology ("market value" vs "intrinsic value"). It's really dependant on very superficial factors such as media coverage, celebrity endorsements, overall economic conditions, and government regulation; the first three having a more short-term effect, and the latter having a stronger impact on the value of Bitcoin I'd argue (if the government makes it illegal to transact in bitcoin tomorrow, I doubt many people will dabble in it).

I also don't buy Satoshi's big idea that middlemen are all that bad. He made a big deal about how "a seller can get scammed by a buyer if the seller sends the product and the buyer disputes the purchase with the bank leaving the seller without both the item and the money". I'm not saying they're perfect, but I'd argue that most people would like to have an assurance that IF they forget their password to their account, they can recover it. IF they mispell the email address for an e-transfer, the bank can cancel the transaction. And sometimes, you just need to sue the person you are transacting with. As a law-abiding citizen, you would prefer to live in a country where the law is applicable at all times. Such a regulatory environment cannot have roots within a blockchain. Governments and centralized authorities will always have a place in our world. (I guess this is not an attack on Bitcoin per se anymore, it's more about the idea that blockchain technology does have it's limitations in use cases).

And just a few words about the blockchain: while blockchain technology offers many benefits, it is important to recognize its limitations when it comes to storing sensitive information. While the transactions on the Bitcoin network may seem "random" and hidden,  they are pseudonymous, meaning that the identity of the users behind the transactions is not directly revealed, but can be deduced. 

If the Facebook-Cambridge Analytica scandal taught us anything, it's that ordinary civilians are uncomfortable and frustrated with how their personal data is shared left and right without their consent. People clearly value privacy and control over their data.

If we expand blockchain's reach into other aspects of our lives, then anyone would be able to read/estimate how much money we have, where we visit, who we chat with, which airlines we use, which movies we watch, so on and so forth. Would you rather Netflix see and analyze your watch pattern, feed the data into their AI tools and show you new movie recommendations, or would you rather have anyone with access to the blockchain see which movie you watched yesterday? Because at the end of the day, everything you do on the blockchain leaves a permanent mark and can be traced back to you.

## _Update 2023-04-28_

The Bitcoin whitepaper doesn't implicitly talk about this, but it's still something that came up in my mind: what happens if a fake transaction is broadcasted? What stops me from saying that Jonny is sending me 10 bitcoins?

Now that I'm writing it, the answer is pretty clear: I can't pretend to be Jonny. The previous owner of those 10 bitcoins has to sign and approve the transaction using his private key, which I don't have access to. If I were to broadcast such a message out to the network, sure the nodes will pick it up, but they go through steps to validate a transaction; they don't just turn a blind eye to the details and add everything they get to the block that they're working on.

Nodes in the Bitcoin network are programmed to verify the validity of every transaction they receive, and they do this by checking that the transaction meets certain criteria, such as:

- The transaction is properly formatted with the correct syntax and data structure
- The transaction inputs are valid (i.e. they have not already been spent)
- The transaction outputs are valid (i.e. they do not exceed the inputs)
- The transaction is signed with the correct private key(s)

If a node receives a transaction that fails to meet any of these criteria, it will reject the transaction and not include it in the block. And if a miner (for example, me) does try to include an invalid transaction in their block [(2)](#2), other nodes will reject the block thanks to the proof-of-work concept: the longest chain is the one that is the real chain.


---

### Notes:

### 1
And I'd argue that that is a big part on why gold's value is pretty stable and people consider it to be a safe investment. If ever people decide that gold isn't valuable (for whatever reason), and you have money in gold, well then in the worst case scenario, there are uses in various industries for this material, so there will always be some demand for it. It's relatively safe because its value will never be 0, as will likely always be demand for it. 

I don't think we can say that with certainty about Bitcoin. Its future is not as clear. Blockchain technology will likely thrive and we will keep finding uses for it, but Bitcoin, it's hard to tell. If we enter a recession, will people be buying Bitcoin? I don't know. But now, if we enter a recession, will people be buying gold? Yes, probably. Either NASA will be working on a new satellite, and if a cut in NASA's budget occurs, well then people will need it in their teeth, and if not, then I can guarantee that people will still be buying phones and electronics with gold in them. Industry applications are not that large for gold, but that's enough to build confidence in people about its value. Other than industry uses, which are critical for technological advancement and the betterment of our lives, there is also jewelery. Gold is very much ingrained in certain cultures, such as in Hindu weddings.

We value what others value. If you're in prison, and you don't smoke, you will still accept a cigarette as a form of payment because you know that the entire cohort of section B smoke, and you know they will always want cigarettes. 

### 2
Actually, I don't even think that I'll be able to add a fake transaction, even to my block. 

To participate in the Bitcoin network, I would need to follow the rules of the protocol, including verifying the validity of transactions. Having 51% of the computing power would give me the ability to create a longer blockchain and potentially conduct a double-spend attack, but it would not give me the ability to bypass the transaction verification process.
