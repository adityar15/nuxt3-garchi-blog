<template>
  <div class="flex flex-col gap-2">
    <span class="text-sm text-light"> {{ date_published }} </span>
    <span class="text-sm text-light">{{ props.itemMeta?.author }}</span>
  </div>
</template>

<script setup>
import dayjs from "dayjs";

const props = defineProps({
  itemMeta: Object,
});

console.log("props", props.itemMeta);

const date_published  = computed(() => {
  if (!props.itemMeta?.date_published) return;
  return dayjs(props.itemMeta?.date_published).format("DD-MM-YYYY");
});
</script>

<style lang="scss" scoped>
</style>