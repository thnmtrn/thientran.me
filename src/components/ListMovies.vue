<script setup lang="ts">
import { defineProps } from 'vue'

const { movies } = defineProps<{ movies: any }>()
</script>

<template>
  <template v-for="key in Object.keys(movies)" :key="key">
    <h4 class="mt-10 font-bold">
      {{ key }}
    </h4>
    <div class="movie-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in movies[key]"
        :key="idx"
        class="item relative flex"
        :href="item.link"
        target="_self"
        :class="!item.link ? &quot;opacity-0 pointer-events-none h-0 -mt-8 -mb-4&quot; : &quot;&quot;"
      >
        <div v-if="item.icon" class="pt-2 pr-5">
          <Icon class="text-3xl opacity-50" :icon="item.icon || 'carbon:unknown'" />
        </div>
        <div class="flex-auto">
          <div class="text-normal hover:text-blue-400">{{ item.name }}</div>
          <div
            class="desc text-sm opacity-50 font-normal"
            v-html="item.desc"
          />
        </div>
      </a>
    </div>
  </template>
  <div class="markdown mt-10">
    <p class="opacity-75">
      <em>Thanks for checking out my movies reccomendations.</em>
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  a.item {
    padding: 0.8em 1em;
    background: transparent;
    font-size: 1.1rem;

    &:hover {
      background: #88888808;
    }
  }
}
</style>
