<template>
    <div v-html="clean" class="prose prose-invert max-w-full">
    </div>
</template>

<script setup>
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';


const props = defineProps({
    markdown: String
})


const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const clean = DOMPurify.sanitize(props.markdown);

</script>

