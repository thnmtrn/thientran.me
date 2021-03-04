<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
  </main>
    <Footer class=""/>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { property: 'og:title', content: 'Thien Tran' },
    { property: 'og:image', content: 'https://thientran.me/avatar.png' },
    { name: 'description', content: 'Thien Tran\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@thnmtrn' },
  ],
})
</script>
