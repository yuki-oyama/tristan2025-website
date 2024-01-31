---
date: "2022-10-24"
sections:
- block: hero
  content:
    #image:
    #  filename: welcome.jpg
    text: |
      <!--**Twelveth Triennial Symposium on Transportation Analysis conference**  
      **June 22 to 27, 2025**  
      **[Bankoku Shinryokan](https://www.shinryokan.com/menuIndex.jsp?id=21545&menuid=6407&funcid=28) in Okinawa, Japan**       
      <br>
      
      Twelveth Triennial Symposium on Transportation Analysis conference (TRISTAN XII) will take place from June 22 to 27, 2025, at the Bankoku Shinryokan in Okinawa, Japan (in-person only).
      
      Earlier TRISTAN symposiums have established a tradition of a symposium of high scientific quality, with lots of interaction during and outside the technical sessions, a good sense of community, and enriching and enjoyable social tours.
      We are expecting over 300 academics, researchers and practitioners from around the world to convene to discuss mathematical models, methodologies and computational results, and to exchange ideas on advanced applications and technologies in transportation.-->
    
      
  design:
    columns: "2"
    background:
      image: 
        filename: beach.jpg
        darken: 0.5
        size: cover
        position: center
        parallax: false
      text_color_light: true
      color: "#24292e"

- block: hero
  content:
    image:
      filename: logoB_tate.png
    text: |
      **Twelveth Triennial Symposium on Transportation Analysis conference (TRISTAN XII)**
      
      <!--**June 22 to 27, 2025**  
      **[Bankoku Shinryokan](https://www.shinryokan.com/menuIndex.jsp?id=21545&menuid=6407&funcid=28) in Okinawa, Japan**-->       
      
       TRISTAN XII will take place from **June 22 to 27, 2025**, at the [Bankoku Shinryokan](https://www.shinryokan.com/menuIndex.jsp?id=21545&menuid=6407&funcid=28) in **Okinawa, Japan**.
      <br>
    
      <!--As the tradition of TRISTAN, the symposium is full of opportunity of interactions with high scientific quality during and outside technical sessions, a good sense of community, and enriching and enjoyable social tours in the island! We are expecting over 300 academics, researchers and practitioners from around the world to convene to discuss mathematical models, methodologies and computational results, and to exchange ideas on advanced applications and technologies in transportation.-->
      
    cta:
      url: call
      label: Call for submissions
      icon_pack: fas
      icon: paper-plane
  
  design:
    columns: "2"
    font_size: small
      
- block: collection
  content:
    count: 5
    filters:
      author: ""
      category: ""
      exclude_featured: false
      publication_type: ""
      tag: ""
    offset: 0
    order: desc
    page_type: post
    subtitle: null
    text: null
    title: Updates
  design:
    columns: "2"
    view: compact

#- block: collection
#  content:
#    count: 5
#    filters:
#      author: ""
#      category: ""
#      exclude_featured: true
#      publication_type: ""
#      tag: ""
#    offset: 0
#    order: desc
#    page_type: publication
#    subtitle: null
#    text: null
#    title: Proceedings
#  design:
#    columns: "2"
#    view: citation

- block: markdown
  content:
    subtitle: ""
    text: null
    title: null
  design:
    background:
      image:
        filename: oyama/ishigaki.jpg
        filters:
          brightness: 1
        parallax: false
        position: center
        size: cover
        text_color_light: true
    columns: "1"
    css_class: fullscreen
    spacing:
      padding:
      - 20px
      - "0"
      - 20px
      - "0"
- block: markdown
  content:
    subtitle: null
    text: |
      {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    title: null
  design:
    columns: "1"
title: null
type: landing
---
