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
      icon: 'file-icons:jsx-atom'
    - name: 'Educated'
      link: '/books'
      desc: 'Tara Westover'
      icon: 'dashicons:welcome-learn-more'
    - name: 'Thinking, Fast and SLow'
      link: '/books'
      desc: 'Daniel Kahneman'
      icon: 'mdi:head-lightbulb-outline'
    - name: 'Outliers: The Story of Success'
      link: '/books'
      desc: 'Malcolm Gladwell'
      icon: 'mdi:comment-alert-outline'
    - name: 'Talking to Strangers'
      link: '/books'
      desc: 'Malcolm Gladwell'
      icon: 'mdi:account-group-outline'
    - name: 'Think and Grow Rich'
      link: '/books'
      desc: 'Napoleon Hill'
      icon: 'ri:money-dollar-circle-line'

  Fiction:
    - name: 'Pachinko'
      link: 'https://goodreads.com'
      desc: 'hun lee su 3'
      icon: 'mdi:slot-machine-outline'
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
      icon: 'whh:pixelbow'
    - name: 'Harry Potter Series'
      link: '/books'
      desc: 'JK Rowling'
      icon: 'clarity:wand-line'
    - name: 'Name of the Wind'
      link: '/books'
      desc: 'Patrick Rothfuss'
      icon: 'ph:wind'
  Want to Read:
    - name: 'Sympathizer'
      link: '/books'
      desc: 'Viet Thanh Nguyen'
      icon: 'carbon:tool-box'
---

<ListBooks :books="frontmatter.books"/>
