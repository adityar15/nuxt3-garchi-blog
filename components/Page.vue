<template>
   <GarchiComponent v-for="section in page?.sections" :key="section.id" :section="section" />
</template>

<script setup lang="ts">


const props = defineProps<{
    slug: string
}>()

const {data:page} = await useFetch('/api/garchipage', {
    method: 'POST',
    body: {
        slug: props.slug
    }
})
</script>

<style scoped>

</style>