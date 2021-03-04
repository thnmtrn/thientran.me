---
title: movies - Thien Tran
display: movies
subtitle: movies that i've enjoyed
description: movies that i've enjoyed or plan to read
movies:
  Fiction:
    - name: 'Joker'
      link: 'https://www.imdb.com/title/tt7286456/'
      desc: 'you wouldnt get it'
      icon: 'noto-joker'
    - name: 'Infinity War'
      link: '/movies'
      desc: 'darkness arrives'
      icon: 'ri:reactjs-fill'
    - name: 'Parasite'
      link: '/movies'
      desc: 'please write description'
      icon: 'tabler:currency-dollar'

  NonFiction:
    - name: 'Inception'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:campsite'
    - name: 'Crazy Stupid Love'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:windy-strong'

    - name: 'Shawshank Redemption'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:document'
    - name: 'Vite Shiki'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:code'

  Old Movies:
    - name: 'Batman Begins'
      link: '/movies'
      desc: 'please write description'
      icon: 'mdi:nuxt'

  Comedy:
    - name: '500 Days of Summer'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:app-switcher'
    - name: 'Codecember'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:app-switcher'

---

<ListMovies :movies="frontmatter.movies"/>
