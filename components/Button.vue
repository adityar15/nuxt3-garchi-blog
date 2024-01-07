<template>
  <button
    v-bind="$attrs"
    :class="`rounded-md 
      ${variant} px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "danger", "success", "outline"].includes(value),
  },
});
</script>

<style scoped>
.primary {
  @apply bg-primary text-light hover:bg-primary/90;
}
.secondary {
  @apply bg-secondary text-light hover:bg-secondary/90;
}
.danger {
  @apply bg-danger text-light hover:bg-danger/90;
}
.success {
  @apply bg-success text-light hover:bg-success/90;
}
.outline {
  @apply bg-transparent border border-primary text-primary hover:bg-primary/90;
}
</style>