---
title: books - Thien Tran
display: books
subtitle: books that i've enjoyed
description: Books that i've enjoyed or plan to read
books:
  Non Fiction:
    - name: 'Atomic Habits'
      link: '/books'
      desc: 'James Clear'
      icon: 'carbon:tool-box'
    - name: 'Educated'
      link: '/books'
      desc: 'Tara Westover'
      icon: 'tabler:currency-dollar'
    - name: 'Thinking, Fast and SLow'
      link: '/books'
      desc: 'Daniel Kahneman'
      icon: 'carbon:code'
    - name: 'Outliers: The Story of Success'
      link: '/books'
      desc: 'Malcolm Gladwell'
      icon: 'carbon:code'
    - name: 'Talking to Strangers'
      link: '/books'
      desc: 'Malcolm Gladwell'
      icon: 'carbon:code'
    - name: 'Think and Grow Rich'
      link: '/books'
      desc: 'Napoleon Hill'
      icon: 'carbon:code'

  Fiction:
    - name: 'Pachinko'
      link: 'https://goodreads.com'
      desc: 'hun lee su 3'
      icon: 'carbon:tool-box'
    - name: 'Vitesse'
      link: '/books'
      desc: 'Opinionated Vite Starter Template'
      icon: 'carbon:campsite'
    - name: 'Vite Shiki'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:code'
    - name: 'Hunger Games'
      link: '/books'
      desc: 'Suzanne Collins'
      icon: 'carbon:code'
    - name: 'Harry Potter Series'
      link: '/books'
      desc: 'JK Rowling'
      icon: 'carbon:code'
    - name: 'Name of the Wind'
      link: '/books'
      desc: 'Patrick Rothfuss'
      icon: 'carbon:code'
  Want to Read:
    - name: 'Sympathizer'
      link: '/books'
      desc: 'Viet Thanh Nguyen'
      icon: 'carbon:tool-box'
---

<ListBooks :books="frontmatter.books"/>
