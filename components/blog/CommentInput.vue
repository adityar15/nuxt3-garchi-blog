<template>
  <form class="flex flex-col gap-3" @submit.prevent="addComment">
    <FormGroup type="textarea" name="comment" placeholder="Enter your comment here" v-model="comment" />
    <div class="text-right">
      <Button :disabled="pending">Comment</Button>
    </div>
  </form>
</template>

<script setup>

const props = defineProps({
    articleId: Number
})
const emit = defineEmits(['added'])

const {user} = useAuth()

const comment = ref("")
const pending = ref(false)


function addComment()
{   
    if(!comment.value)
    return

    pending.value = true

    $fetch("/api/blogs/comment", {
        method: "POST",
        body: {
            article_id: props.articleId,
            email: user.value?.email,
            review: comment.value
        }
    }).then(res => {
        emit("added")
        pending.value = false
    })
}

</script>

<style lang="scss" scoped>
</style>