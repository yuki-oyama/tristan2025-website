---
date: "2022-10-24"
sections:
- block: hero
  content:
    #image:
    #  filename: welcome.jpg
    text: |
      **The 12th Triennial Symposium on Transportation Analysis conference**  
      **June 22-27, 2025, Okinawa, Japan**  
      <br>
      
      <!--Twelveth Triennial Symposium on Transportation Analysis conference (TRISTAN XII) will take place from June 22 to 27, 2025, at the Bankoku Shinryokan in Okinawa, Japan (in-person only).
      
      Earlier TRISTAN symposiums have established a tradition of a symposium of high scientific quality, with lots of interaction during and outside the technical sessions, a good sense of community, and enriching and enjoyable social tours.
      We are expecting over 300 academics, researchers and practitioners from around the world to convene to discuss mathematical models, methodologies and computational results, and to exchange ideas on advanced applications and technologies in transportation.-->
    
    #cta:
    #  url: call
    #  label: Call for submissions
    #  icon_pack: fas
    #  icon: paper-plane
      
  design:
    columns: "2"
    background:
      image: 
        filename: busena_high.jpg
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
      <!--**June 22 to 27, 2025**  
      **[Bankoku Shinryokan](https://www.shinryokan.com/menuIndex.jsp?id=21545&menuid=6407&funcid=28) in Okinawa, Japan**-->       
      
       We are honored to host the 12th Triennial Symposium on Transportation Analysis conference (TRISTAN XII), from **June 22 to 27, 2025**, at the [Bankoku Shinryokan](/venue) in **Okinawa, Japan**. The aim of TRISTAN is to provide a platform to exchange and discuss ideas and foster international cooperation. We are expecting researchers and practitioners from around the world to discuss innovative models, methodologies and applications in Transportation Science.
    
    title:
       null
  
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

- block: people
  content:
    sort_ascending: yes
    sort_by: Params.position
    title: Plenary Speakers
    user_groups:
      - Keynote speakers
    text: More to come!
  design:
    show_interests: no
    show_role: no
    show_organizations: yes
    show_social: no

- block: hero
  content:
    #image:
    #  filename: logoB_tate.png
    text: |
      **Important Dates**
      - August 1, 2024: Submissions site opens
      - October 15, 2024: Extended abstract submission deadline
      - January 15, 2025: Notification of acceptance
      - February 15, 2025: Submission of revised extended abstracts
      - April 20, 2025: Early-bird registration deadline
    
    title:
       null
  
  design:
    columns: "2"

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
      {{% cta cta_link="https://tristanconference.org/home" cta_text="Link to TRISTAN general webpage" %}}
    title: null
  design:
    columns: "1"
title: null
type: landing
---
