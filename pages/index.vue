<template>
   <FormAuth />
</template>

<script setup>
// can move this to app.vue if needed
// learn more at https://garchi.co.uk/documentation/1.0/headlessweb/nuxt
// useHead({
//     script: [
//         {
//             src: "https://garchi.co.uk/script/index.es.js",
//             defer: true,
//         }
//     ]
// })

useSeoMeta({
  title: 'My Amazing Blog | Login',
  ogTitle: 'My Amazing Blog | Login',
  description: 'This is my amazing blog, let me tell you all about it.',
  ogDescription: 'This is my amazing blog, let me tell you all about it.',
  twitterCard: 'summary_large_image',
})

</script>
