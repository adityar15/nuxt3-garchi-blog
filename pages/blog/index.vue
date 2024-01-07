<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-light sm:text-4xl">
          From the blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-light">Have fun.</p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <BlogCard v-for="post in data?.data" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GarchiHelper from "~/server/utils/garchi";

const page = ref(1);

const { data } = await useFetch('/api/blogs', {
  key: `blogs-${page.value}`
});

useSeoMeta({
  title: "Blog",
  description: "Blog",
})
</script>

