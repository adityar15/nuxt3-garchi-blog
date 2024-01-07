<template>
    <div class="max-w-4xl mx-auto p-10 flex flex-col gap-5">

        <NuxtImg v-if="data.data[0]?.main_image" :src="data.data[0]?.main_image" class="rounded-lg object-center object-cover w-full aspect-[16/9]" />

        <h1 class="text-4xl font-bold text-light">{{ data.data[0]?.name }}</h1>

        <BlogMetaDetails :itemMeta="metaDetails" />
        <Markdown :markdown="data.data[0]?.description" />
        <LazyBlogLikeButton @reacted="refresh" :articleId="data.data[0]?.item_id" :reactions="data.data[0]?.reactions" />
        <LazyBlogComments :articleId="data.data[0]?.item_id" />
    </div>  
</template>

<script setup>
import GarchiHelper from "~/server/utils/garchi"


const route = useRoute()
const { slug } = route.params

definePageMeta({
    middleware: "auth",
})




const {data, error, refresh} = await useFetch(`/api/blogs/${slug}`, {
    key: `blog-${slug}`
})

console.log("data", data.value)
if(error.value || data.value?.error)
{
    throw createError({statusCode: 404, message: "Article not found"})
}

const {metaDetails} = useItemMeta(data.value?.data[0]?.item_meta)

useSeoMeta({
    title: data.value.data[0]?.name,
    description: data.value.data[0]?.one_liner,
    image: data.value.data[0]?.main_image,
    ogTitle: data.value.data[0]?.name,
    ogDescription: data.value.data[0]?.one_liner,
    ogImage: data.value.data[0]?.main_image,
})

</script>

