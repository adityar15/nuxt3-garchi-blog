<template>
    <div>
        This is protected
    </div>
</template>

<script setup>
  definePageMeta({
    middleware: "auth"
  })
</script>

