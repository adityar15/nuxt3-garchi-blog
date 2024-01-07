<template>
  <div v-bind="$attrs">
    <label
      :for="labelFor"
      :class="
        twMerge('block text-sm font-medium leading-6 text-light', labelClass)
      "
    >
      {{ label }}
    </label>
    <div class="mt-2">
      <input
        v-if="type!='textarea' && type!='select'"
        :name="name"
        :type="type"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="
          twMerge(
            'input',
            inputClass
          )
        "
      />

     <textarea
        v-else-if="type==='textarea'"
        :name="name"
        :required="required"
        :value="modelValue"
        rows="5"
        cols="5"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="
          twMerge(
            'input',
            inputClass
          )
        "
      ></textarea>



      <span class="text-danger py-2" v-if="errorMessage">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { twMerge } from "tailwind-merge";
defineProps({
  labelFor: String,
  label: String,
  labelClass: String,
  inputClass: String,
  modelValue: String,
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "email", "password", "select", "textarea"].includes(value),
  },
  required: Boolean,
  name: String,
  errorMessage: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input {
  @apply block w-full rounded-md border-0 bg-dark/5 p-1.5 text-light shadow-sm ring-1 ring-inset ring-light/10 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 outline-none;
}
</style>