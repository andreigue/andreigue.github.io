---
layout: posts
permalink: /blog/
title: Welcome to my Blog!
author_profile: true
header:
    image: #"/images/typewriter.jpg/"
---
This is where I’ll be constantly posting about topics which interest me. This is a way to ensure that I keep learning, and my favorite way to learn is to explain.

If you want to learn about something in specific, this is not the blog for you. This is simply a record of my own learning experience. Not all articles are meant to be read and understood with no initial knowledge of the topic ([this article]({% post_url 2022-06-14-networking-fundamentals %}) came to mind). That said, anyone is welcome to wander around and see if anything interests them.


## Categories
- [Books](#books)
- [Business](#business)
- [Economics](#economics)
<!-- - Interesting People (COMING SOON) -->
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
