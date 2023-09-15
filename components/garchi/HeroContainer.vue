<template>
  <div class="relative bg-white" v-bind="$attrs">
    <div
      class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8"
    >
      <div
        class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"
      >
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h1
            class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl"
          >
            {{title}}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{sub_heading}}</p>
         
          <div class="mt-10 flex items-center gap-x-6">
            <!-- cta buttons eg: can render components/garchi/LinkButton -->
            <!-- this way you can render nested components  -->
            
            <GarchiComponent v-for="(section) in children" :key="section.id" :section="section" />
          </div>
        </div>
      </div>
      <div
        class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
      >
        <img
          class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          :src="image"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GarchiSection } from "~/assets/types/garchi"


defineProps<{
    title: string,
    image: string,
    sub_heading: string
    children?: GarchiSection[]
}>()
</script>

<style scoped>
</style>