---
title: Posts
description: Read Nicholas O'Sullivan's articles about IT leadership, cyber security, infrastructure, homelabs and technology in Townsville.
keywords: [Nicholas O'Sullivan posts, IT leadership articles, cyber security articles, infrastructure, homelab, Townsville technology]
icon: fas fa-newspaper
order: 3
---

Articles on technology leadership, cyber security, infrastructure, education technology, homelabs and the Townsville technology community.

<div id="post-list" class="flex-grow-1 px-xl-1">
  {% assign visible_posts = site.posts | where_exp: 'post', 'post.hidden != true' %}
  {% for post in visible_posts %}
    <article class="card-wrapper card">
      <a href="{{ post.url | relative_url }}" class="post-preview row g-0 flex-md-row-reverse">
        {% assign card_body_col = '12' %}
        {% if post.image %}
          {% assign src = post.image.path | default: post.image %}
          {% unless src contains '//' %}
            {% assign src = post.img_path | append: '/' | append: src | replace: '//', '/' %}
          {% endunless %}
          {% assign alt = post.image.alt | xml_escape | default: 'Article preview image' %}
          <div class="col-md-5">
            <img src="{{ src }}" alt="{{ alt }}">
          </div>
          {% assign card_body_col = '7' %}
        {% endif %}
        <div class="col-md-{{ card_body_col }}">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title my-2 mt-md-0">{{ post.title }}</h2>
            <div class="card-text content mt-0 mb-3">
              <p>{{ post.description | default: post.excerpt | strip_html | normalize_whitespace | escape }}</p>
            </div>
            <div class="post-meta flex-grow-1 d-flex align-items-end">
              <div class="me-auto">
                <i class="far fa-calendar fa-fw me-1"></i>
                {% include datetime.html date=post.date lang=lang %}
                {% if post.categories.size > 0 %}
                  <i class="far fa-folder-open fa-fw ms-2 me-1"></i>
                  <span class="categories">{{ post.categories | join: ', ' }}</span>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  {% endfor %}
</div>
