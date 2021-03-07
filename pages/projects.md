---
title: Projects - Thien Tran
display: Projects
subtitle: List of projects that I am proud of
description: List of projects that I am proud of
projects:
  Vue Ecosystem:
    - name: 'React Todo'
      link: 'https://thien.gg/todo'
      desc: 'React todo app with hooks and material ui'
      icon: 'carbon:task'
    - name: 'pokedex'
      link: 'https://thien.gg/pokedex'
      desc: 'pokedex with nextjs, discord, tailwind.'
      icon: ic:sharp-catching-pokemon'
    - name: 'notes'
      link: 'https://thien.gg/notes'
      desc: 'built with react, nextjs, mongoosedb'
      icon: 'ic:sharp-note-alt'
    - name: 'coach thai'
      link: 'https://coachthai.com'
      desc: 'built with react, nextjs, mongoosedb, wip'
      icon: 'mdi:basketball-hoop-outline'
    - name: "annie's nail spa"
      link: 'https://annienailsspa.com'
      desc: 'built with react, nextjs, mongoosedb, wip'
      icon: 'noto:nail-polish'
    - name: 'nice dist co'
      link: 'https://nicedist.co'
      desc: 'built with react, nextjs, mongoosedb, wip'
      icon: 'carbon:tool-box'
    - name: 'React MDX Blog'
      link: 'https://nicedist.co'
      desc: 'my blog v1 before i switch to my current v2 version'
      icon: 'ph:notebook'
    - name: 'Instagram clone'
      link: 'https://github.com/thnmtrn/instagram'
      desc: 'instagram clone with vite and react'
      icon: 'mdi:instagram'
    - name: 'Thien Discord bot'
      link: 'https://github.com/thnmtrn/thien-gg'
      desc: 'discord bot with over 300 commands'
      icon: 'file-icons:robots'
    - name: 'JS Snake'
      link: 'https://github.com/thnmtrn/snake'
      desc: 'vanilla javascript remake of a classic'
      icon: 'mdi:snake'
---

<ListProjects :projects="frontmatter.projects"/>
