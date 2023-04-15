---
title: "Bitcoin Part -1: History"
tags: [Technology]
---

#### _This is the first article in a series where my goal is to understand the blockchain, NFTS, and the related technologies._

----------------------------

# Reading the Bitcoin whitepaper

I think the right and honest way to introduce Bitcoin is by going back to the paper that started it all: the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf). While reading it however, I realized that there are some topics it would be better to review in order to move on.

# Some prerequisite knowledge

## Bit of history

Why is Bitcoin such a big deal? To get a better perspective, let's go back in time. 

When humans were hunter gatherers, there was no concept of "ownership". Sure, if I was given a spear by my father and I got my first kill with it at the age of 15, then I'd have some emotional attachment to it. But other than that, there was no concept of "this thing is mine". It simply wasn't needed for our survival. Objects belonged to the commune, and that's it.

However, around 10'000 BC, the agricultural revolution occurred. Agriculture made food supply more reliable and more abundant. And because your village now depends on the crops, these crops are valuable and you must protect them at all cost. "These crops" become "your crops". "The land" becomes "your land". "The tools" become "your tools". Otherwise your children don't eat. And now that your wheat is ready for harvest, you have a surplus of it. Your children are tired of eating bread all day, so you decide to trade some of your wheat for some of your neighbor Jimmy's rice. What if I harvested my wheat before Jimmy even has sown his rice seeds? Well, I could still give him the wheat, but I'm going to have to remember that he owes me 5 bags of rice within the next 6 months. What if instead of trying to remember this, there was a better way?

Writing was invented by the Sumerians around 3500 BC in Mesopotamia (modern-day Iraq), where scribes inscribed symbols onto clay tablets. These earliest writings were mostly used for accounting purposes, such as tracking trade transactions, inventories, and taxes. Writing down what Jimmy owes me is much easier than trying to remember it. This is considered "single-entry accounting", because there was one place where the transactions were noted. On top of that, Jimmy and I are illiterate, so we have to trust that the scribe didn't make any mistakes. 

If we fast forward to Renaissance Italy, we can now explore double-entry accounting. Now, you write a single transaction in two places: "assets" and "liablities". (Yes, accountants today use this very system). So if Jimmy owes me 5 bags of rice within the next 6 months, that will be recorded in my balance sheet under "assets", and more specifically under "accounts receivables". In Jimmy's balance sheet, the fact that he owes me rice will be noted under "liabilities", more specifically under "short-term liabilities". Double-entry accounting minimizes errors because every entry to an account requires a corresponding and opposite entry to another account.

### The modern era

#### Double-entry accounting isn't perfect. Introducing: the Enron scandal  

In single-entry accounting, if the scribe didn't like Jimmy, he could just write that Jimmy owes me 10 bags of rice instead of just 5, and when it's time to pay up, Jimmy would have no way of proving otherwise. With double-entry accounting, scams are also still possible. 

Take the 2001 Enron scandal for example. Enron was a US energy/utilities company publicly traded on the stock market, and they wanted investors to believe that they were financially thriving. So what they did was erect a complex financial structure using offshore entities (essentially shell companies[(1)](#1), but more technically they're called SPVs, or "Special Purpose Vehicles"). These were legally separate from Enron, but were controlled by the company's executives. Enron used hundreds of these offshore entities, as well as some domestic shell companies, to hide debt and losses from its financial statements. How did they do it?

Well, they employed numerous accounting tricks to inflate their numbers, but one thing Enron did was transfer their assets to the SPVs, which would issue debt to purchase those assets. Enron would receive cash from the sale of these assets to the SPVs, which they would use to pay down their own debt or report as revenue. So they basically pretended like they were making more sales and that their revenue was higher than it actually was. [(2)](2)

#### Trusting a central authority isn't ideal. Introducing: the 2008 housing market collapse

To keep things short, investors, regulators, and the public had placed too much trust in the financial industry and its institutions, without fully understanding what they were getting themselves into. Banks and other financial institutions made risky investments and loans, often using a complex web of financial instruments that were difficult to understand. Investments were rated "safe" when they shouldn't have been, and when things started to go wrong, it caused a domino effect of defaults, bankruptcies, and this ultimately led to the collapse of several large financial institutions. This resulted in a global financial crisis that we now know and love.

I think another big problem was that these banks and institutions were so big that they knew that the government wouldn't let them collapse; and so they took on excessive risk knowing that they would be bailed out if things went wrong.

This further eroded the confidence and trust that regular people had in both these financial institutions and in the government.

## Perfect timing to enter. Introducing: Bitcoin and "triple-entry accounting"

"Bitcoin: A Peer-to-Peer Electronic Cash System", written by Satoshi Nakamoto, describes a peer-to-peer electronic payment system that is decentralized and enables financial transfers without the middleman (aka "the bank"). It was a revolutionary idea back when it was first published in 2008, in the midst of the financial crisis and just a month after the bankruptcy of Lehman Brothers (right when trust in traditional financial institutions was at an all-time low).

While Bitcoin was introduced in 2008, the idea was not completely new. Ian Grigg published the paper "[Triple Entry Accounting](https://www.researchgate.net/publication/308640258_Triple_Entry_Accounting)" in 2005, which was before the creation of Bitcoin. In the paper, Grigg used the term "triple entry" to describe a system where a transaction is verified by a third party and added to the account ledgers of both parties, creating a new level of trust and transparency. Grigg did not use the term "blockchain" in the paper, but he did discuss the use of public-key cryptography and digital signatures to ensure the integrity of the system. Over 3 years later, this led to the development of the blockchain technology we know of today.

---

### Note:

### 1
A shell company is a legal entity that has no active business operations, significant assets, or employees, and exists only on paper. It is typically created to serve as a vehicle for various financial transactions or other activities, such as holding assets, entering into contracts, or conducting other types of business. Shell companies can be used for legitimate purposes, such as simplifying complex business structures or protecting intellectual property, but they can also be used for illegal or unethical purposes, such as hiding assets, evading taxes, or laundering money.

Regarding Enron, their offshore entities were often located in tax havens such as the Cayman Islands and were used to conduct transactions that would be difficult to trace or subject to regulation in the United States. 

### 2
The auditing firm responsible for auditing Enron's financial statements was Arthur Andersen LLP, one of the largest accounting firms in the world at the time. In 2002, Arthur Andersen was found guilty of obstruction of justice for shredding documents related to their audits of Enron, which led to their eventual collapse. As a result of the Enron scandal, new regulations and strict guidelines were introduced to prevent conflicts of interest and to hold auditors accountable for their work.