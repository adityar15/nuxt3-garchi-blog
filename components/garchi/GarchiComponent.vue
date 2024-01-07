<template>
   <!-- Dynamic component that renders components registered in Garchi -->
        <component v-bind="{
            ...section.props,
            children: section.children
        }" :is="Component" />
   
</template>

<script setup lang="ts">
import type {GarchiSection} from "@/assets/types/garchi"
const props = defineProps<{
    section: GarchiSection
}>()

const Component = resolveComponent(props.section.name)

</script>

