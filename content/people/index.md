---
title: "People"
sections:
- block: people
  content:
    sort_ascending: yes
    sort_by: Params.position
    title: Organizing Committee
    user_groups:
    #- Chair
    #- Co-Chair
    - Organizing Committee
    - Program Committee
    #- Scientific Committee
  design:
    show_interests: no
    show_role: yes
    show_organizations: yes
    show_social: no
- block: markdown
  content:
    title: Scientific Committee
    text: |
      {{< include-markdown file="content/people/scientific_committee.md" >}}
- block: markdown
  content:
    subtitle: null
    text: |
      {{% cta cta_link="https://tristanconference.org/steering-committee" cta_text="Link to TRISTAN general webpage" %}}
    title: Steering Committee
  design:
    columns: "1"
date: "2022-10-24"
type: landing
---
