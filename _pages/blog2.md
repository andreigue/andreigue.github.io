---
layout: posts
permalink: /blog2/
title: "Blog2"
author_profile: true
header:
    image: "/images/typewriter.jpg/"
---

# _PAGE NOT READY YET, COMING SOON_

Welcome to the main page of the blog section of the website! I hope you will enjoy your time here and don't hesitate to let me know if that is the case! 



### Pick a category you are intersted in, or, view my posts by date published! (to come) 


## Categories
- [Books](#books)
- [Business](#business)
- [Economics](#economics)
- [Interesting People](#interesting-people)
- [History](#history)
- [Science](#science)
- [Technology](#technology)
- [Thoughts](#thoughts)

---

## Books

a
sd
asd
a
sd

## Business

sd
![image](\images\retrowave.jpg)
This is an image description. it can be long or it can be short.
## Economics



## Interesting People



## History 

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}


## Science




## Technology

## Thoughts


