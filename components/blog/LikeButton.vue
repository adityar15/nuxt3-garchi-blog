<template>
    <button class="outline-none" v-if="user?.uid" @click="likeArticle">
        <HeartIcon v-if="!hasLiked" class="size-5 stroke-danger" />
        <HearIconSolid v-else class="size-5 fill-danger" />
    </button>
</template>

<script setup>
import {HeartIcon} from "@heroicons/vue/24/outline"
import {HeartIcon as HearIconSolid} from "@heroicons/vue/24/solid"

const {user} = useAuth()

const props = defineProps({
    reactions: Array,
    articleId: Number
})

const emit = defineEmits(['reacted'])

const hasLiked = computed(()=> props.reactions?.find(reaction => reaction.user_identifier == user.value?.email))

console.log("hasLiked", hasLiked.value)


function likeArticle()
{
    $fetch('/api/blogs/react', {
        method: "POST",
        body: {
            item_id: props.articleId,
            reaction: "heart",
            email: user.value?.email,
            reaction_for: "item"
        }
    }).then(res => {
        emit("reacted")
    })
}

</script>

