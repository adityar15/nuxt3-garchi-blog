<template>
   <Page slug="/" />
</template>

<script setup>
// can move this to app.vue if needed
// learn more at https://garchi.co.uk/documentation/1.0/headlessweb/nuxt
useHead({
    script: [
        {
            src: "https://garchi.co.uk/script/index.es.js",
            defer: true,
        }
    ]
})
</script>
