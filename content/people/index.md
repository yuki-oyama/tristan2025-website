---
title: "People"
sections:
- block: markdown
  content:
    title: Committees
    text: |
      - [Organizing Committee](#organizing-committee)
      - [Program Committee](#program-committee)
      - [Scientific Committee](#scientific-committee)
      - [Steering Committee](#steering-committee)
      
- block: people
  content:
    sort_ascending: yes
    sort_by: Params.position
    title: <a name="organizing-committee">Organizing Committee</a>
    user_groups:
    #- Chair
    #- Co-Chair
    - Organizing Committee
    #- Program Committee
    #- Scientific Committee
  design:
    show_interests: no
    show_role: yes
    show_organizations: yes
    show_social: no
- block: markdown
  content:
    title: <a name="program-committee">Program Committee</a>
    text: |
      {{< include-markdown file="content/people/program_committee.md" >}}
- block: markdown
  content:
    title: <a name="scientific-committee">Scientific Committee</a>
    text: |
      {{< include-markdown file="content/people/scientific_committee.md" >}}
- block: markdown
  content:
    subtitle: null
    text: |
      {{% cta cta_link="https://tristanconference.org/steering-committee" cta_text="Link to TRISTAN general webpage" %}}
    title: <a name="steering-committee">Steering Committee</a>
  design:
    columns: "1"
date: "2022-10-24"
type: landing
---
