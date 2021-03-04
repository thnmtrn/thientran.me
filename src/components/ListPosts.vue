<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '/~/logics';

const tag = ref('code');
const router = useRouter();
const routes = router
  .getRoutes()
  .filter((i) => i.path.startsWith('/posts') && i.meta.frontmatter.date)
  .sort(
    (a, b) =>
      +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date)
  );

const posts = computed(() =>
  routes.filter(
    (i) => !i.path.endsWith('.html') && i.meta.frontmatter.tag === tag.value
  )
);
</script>

<template>
  <div class="">
    <span
      class="opacity-50 mr-2 cursor-default text-normal"
      :class="{ 'opacity-100': tag === 'code' }"
      @click="tag = 'code'"
    >
      #code
    </span>
    <span
      class="opacity-50 mr-2 cursor-default text-normal"
      :class="{ 'opacity-100': tag === 'tech' }"
      @click="tag = 'tech'"
    >
      #tech
    </span>
    <span
      class="opacity-50 mr-2 cursor-default text-normal"
      :class="{ 'opacity-100': tag === 'personal' }"
      @click="tag = 'personal'"
    >
      #personal
    </span>
    <span
      class="opacity-50 mr-2 cursor-default text-normal"
      :class="{ 'opacity-100': tag === 'fitness' }"
      @click="tag = 'fitness'"
    >
      #fitness
    </span>
    <span
      class="opacity-50 mr-2 cursor-default text-normal"
      :class="{ 'opacity-100': tag === 'random' }"
      @click="tag = 'random'"
    >
      #random
    </span>
  </div>

  <ul>
    <router-link
      v-for="route in posts"
      :key="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
      :to="route.path"
    >
      <li class="no-underline">
        <div class="title text-lg">
          {{ route.meta.frontmatter.title }}
        </div>
        <div class="time opacity-50 text-sm -mt-1">
          {{ formatDate(route.meta.frontmatter.date) }}
          <span v-if="route.meta.frontmatter.duration"
            >· {{ route.meta.frontmatter.duration }}</span
          >
        </div>
      </li>
    </router-link>
  </ul>
</template>
