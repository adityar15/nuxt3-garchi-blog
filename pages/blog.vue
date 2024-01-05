<template>
  <div></div>
</template>

<script setup>
import garchiHelper from "@/server/utils/garchi";

const { data } = await useAsyncData(
  () => {
    return garchiHelper.garchiGetRequest("items");
  },
  {
    server: true,
  }
);

console.log(data);
</script>

<style lang="scss" scoped>
</style>