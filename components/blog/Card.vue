<template>
  <article class="flex flex-col items-start justify-between">
    <div class="relative w-full">
      <NuxtImg
        :src="props.post.main_image"
        alt="Blog cover image"
        class="aspect-[16/9] w-full rounded-2xl bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      />

      <div
        class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
      />
    </div>
    <div class="max-w-xl">
      <div class="mt-8 flex items-center gap-x-4 text-xs">
        <time :datetime="metaDetails?.date_published" class="text-gray-500">{{
          metaDetails?.date_published
        }}</time>
        <span
          class="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-gray-100 hover:bg-gray-100"
        >
          {{ categories }}
        </span>
      </div>
      <div class="group relative">
        <h3
          class="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600"
        >
          <NuxtLink :to="`/blog/${post.slug}`">
            <span class="absolute inset-0" />
            {{ props.post.name }}
          </NuxtLink>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-100">
          {{ post.one_liner }}
        </p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-100">
            <span>
              <span class="absolute inset-0" />
              {{ metaDetails?.author }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: Object,
});

const {metaDetails} = useItemMeta(props.post.item_meta)

const categories = computed(() =>
  props.post?.categories?.reduce((prev, current) => {
    prev += current.name + ", ";
    return prev;
  }, "")
);
</script>

<style lang="scss" scoped>
</style>