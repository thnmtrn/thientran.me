---
title: Movies - Thien Tran
display: Movies
subtitle: movie recomendations
description: movie recomendations
movies:
  2020:
    - name: 'Joker'
      link: '/movies'
      desc: 'you wouldnt get it'
      icon: 'noto-joker'
    - name: 'Infinity War'
      link: '/movies'
      desc: 'darkness arrives'
      icon: 'ri:reactjs-fill'
    - name: 'Parasite'
      link: '/movies'
      desc: 'please write description'
      icon: 'la:spider'

  NonFiction:
    - name: 'Inception'
      link: '/movies'
      desc: 'please write description'
      icon: 'typcn:spiral'
    - name: 'Crazy Stupid Love'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon:windy-strong'

    - name: 'Shawshank Redemption'
      link: '/movies'
      desc: 'please write description'
      icon: 'si-glyph-person-prison'
    - name: 'Wolf of Wallstreet'
      link: '/movies'
      desc: 'please write description'
      icon: 'tabler:currency-dollar'

  Old Movies:
    - name: 'Batman Begins'
      link: '/movies'
      desc: 'please write description'
      icon: 'carbon-bat'

  Comedy:
    - name: '500 Days of Summer'
      link: '/movies'
      desc: 'please write description'
      icon: 'mdi:flower-outline'
    - name: 'Spiderman'
      link: '/movies'
      desc: 'please write description'
      icon: 'mdi:spider-thread'
---

<ListMovies :movies="frontmatter.movies"/>
