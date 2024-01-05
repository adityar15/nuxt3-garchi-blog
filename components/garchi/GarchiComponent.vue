<template>
   <!-- Dynamic component that renders components registered in Garchi -->
        <component v-bind="{
            ...section.props,
            children: section.children
        }" :is="Component" />
   
</template>

<script setup lang="ts">
import {GarchiSection} from "~/assets/types/garchi.d"
const props = defineProps<{
    section: GarchiSection
}>()

const Component = resolveComponent(props.section.name)

</script>

