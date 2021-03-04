---
title: books - Thien Tran
display: books
subtitle: books that i've enjoyed
description: Books that i've enjoyed or plan to read
books:
  Fiction:
  
    - name: 'Pachinko'
      link: 'https://goodreads.com'
      desc: 'hun lee su 3'
      icon: 'carbon:tool-box'
      
    - name: 'Atomic Habits'
      link: 'https://github.com/antfu/reactivue'
      desc: 'Use Vue Composition API in React components'
      icon: 'carbon:tool-box'
    - name: 'Educated'
      link: 'https://github.com/antfu/v-dollar'
      desc: 'Tara Westover'
      icon: 'tabler:currency-dollar'

  NonFiction:
    - name: 'Vitesse'
      link: 'https://github.com/antfu/vitesse'
      desc: 'Opinionated Vite Starter Template'
      icon: 'carbon:campsite'
    - name: 'Vite Shiki'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:code'

---

<ListBooks :books="frontmatter.books"/>
