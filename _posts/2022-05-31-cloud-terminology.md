### What is the general definition of cloud?

Amazon's AWS basic definition is spot on: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS)." [1] 
Now of course AWS (33% market share) conveniently forgot to mention its competitors: Microsoft Azure (21% share), Google Cloud (10% share), Alibaba Cloud (6% share), IBM Cloud (4% share), Salesforce Cloud offerings (3% share), Tencent Cloud (3% share) and Oracle Cloud (2% share). 
These are huge companies, and they can afford to spend billions on procuring entire data centers and physical servers. This translates into savings for the customers thanks to the economies of scale. Customers don't typically  know or care about the exact physical location of those resources, but the important thing is that the servers used for the task are spread in multiple locations, which improves reliability and reduces latency for end users (if any).

### Why the cloud? Why now?

To better understand why, it helps to see how we got here. In th 1990's, large companies would have rooms in their business solely for the purpose of storing data. Hence, the entire data center belongs to the company. The company has entire control over their data center; it's their servers, their databases, their routers, switches and firewalls. All of this is theirs, because they bought them. Now the question is, why didn't all companies just build their own centers and buy their own equipment? Well the first reason was that investing in data center real estate is expensive.

That is where co-location started to become a thing. In this scenario, the company has to buy their own server racks, but they can rent out space from a co-location provider. This co-location provider owns the real estate of the data center, and provides all the necessities like power, cooling, fire protection systems, and cabinets, to allow tenants to securely have access to their own equipment.

Beyond the cost of owning physical space, there is also the cost of owning the physical IT equipment. Have a look for yourself at [the price of server racks](https://www.cdw.com/search/servers-server-management/servers/rack-servers/?w=SB2) and [the price of routers](https://www.cdw.com/search/networking/routers/data-routers/?w=RG4). It is because of these huge initial costs that companies looked for solutions beyond colocation. Furtheremore, what if something happened in the data center? Failure to prevent service downtime can lead to financial losses, lawsuits, and bad reputation. And that is where the virtual data centers came in.  


### How are the types of cloud be categorized?

There are three main types of cloud computing: IaaS, PaaS and SaaS. They differ in the amount of control given to the customer. 
IaaS provides access to everything down to the networking capabilities, storage, and ultimately, the "raw" computers (whether it be virtual or physical hardware). PaaS on the other hand, provides an environment (or "platform") which the customer needs in order to run the applications desired. This allows the customer to focus on the application logic and its data, rather than meddling around with the hardware and OS details. While IaaS does provide more control of the IT devices to the customer, elasticity management is also their responsibility. In order words, if not careful, the customer may be paying for more hardware than actually needed, or vice versa (renting less devices than needed). Finally, SaaS passes on all the control to the cloud provider: from the low level networking/server configurations, to the OS and runtime configurations, to the application layer and its data. SaaS applications are those which are hosted on the cloud, and they are consumed directly over the internet by end users. Well-known SaaS applications include the "G Suite" (Gmail, Google Drive, Google Docs, etc.), Dropbox, SalesForce (a cloud-based CRM platform, or Customer Relationship Management, runs on AWS), Zoom (cloud-based video conferencing platform, uses AWS), Slack (communication platform, bought by SalesForce), Shopify (e-commerce platform, uses mainly Google Cloud), Adobe Creative Cloud (runs on Microsoft Azure) and Netflix (runs on AWS).

SaaS is the easiest to understand because we all come across it. PaaS is more relatable to programmers and folks in IT. For anyone whose done AI/ML-related projects, they may have used Google Colab. Rather than having to update and manage the AI/ML libraries manually, that is all done by Google. All the developer needs to do is focus on writing the code, rather than setting up and maintaining the runtime environment. Another example of a PaaS is Google App Engine, which is used for building web applications and mobile backend. PaaS essentially serves as a platform for the development or deployment of code to create a cloud-based applications.

IaaS is even more "niche", with examples like AWS EC2 (Elastic Compute Cloud), OpenStack, and GCE (Google Compute Engine), all of which provide virtual servers and virtual machines.

---

### Sources:
<https://aws.amazon.com/what-is-cloud-computing/>

<https://en.wikipedia.org/wiki/Colocation_centre>



### Photo Credit:
<https://www.quora.com/What-is-the-evolutionary-benefit-for-palm-trees-to-grow-so-tall>

