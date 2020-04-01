---
layout: posts
permalink: /blog/
title: # ""
author_profile: true
header:
    image: #"/images/typewriter.jpg/"
---
# Welcome to my Blog!
This is where I’ll be constantly posting about topics which interest me. This is an attempt to improve my lifestyle and to ensure that I keep learning.

Here I cover topics in multiple fields, including but not limited to business, health, psychology, economics, technology and history. Most blogs typically focus on one central subject, but I couldn’t do that. There are way too many interesting fields for me to limit myself. I’m sure a lot of people can relate!

If you want to learn about something in specific, this is not the website for you. This is simply a record of my own learning experience. That said, anyone is welcome to wander around and see if anything interests them.


## Categories
- [Books] (COMING SOON)
- [Business](#business)
- [Economics](#economics)
- [Interesting People] (COMING SOON)
- [History](#history)
- [Science](#science)
- [Technology](#technology)
- [Thoughts](#thoughts)



<!--- {% include category-list.html %} --->

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
