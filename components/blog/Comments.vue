<template>
    <div>    
        <BlogCommentInput v-if="user?.uid" :articleId="props.articleId" @added="refresh" />

        <ul class="my-6 flex flex-col gap-4">
            <BlogCommentCard v-for="comment in data?.data" :comment="comment" :key="comment.id" />
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    articleId: Number
})

const {user} = useAuth()

const {data, refresh} = useFetch(`/api/blogs/comments?article_id=${props.articleId}`, {
    key: `blog-comments-${props.articleId}`
})


</script>

<style lang="scss" scoped>

</style>