<template>
    <li class="p-2 border border-gray-700 rounded-lg flex flex-col gap-1">
        <span class="text-light/90 font-semibold"> 
            {{ comment.user?.name }}
        </span>

        <p class="text-gray-400">
            {{ comment.review_body }}
        </p>

        <ul v-if="comment.replies.length > 0">
            <BlogCommentCard v-for="comment in comment.replies" :comment="comment" :key="comment.id" />
        </ul>
    </li>
</template>

<script setup>
defineProps({
    comment: Array
})
</script>

<style lang="scss" scoped>

</style>