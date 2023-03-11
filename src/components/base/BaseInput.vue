<script setup>
import { maska as vMaska } from "maska";
import { ValidationProvider, extend } from "vee-validate";
import { ref } from "@vue/composition-api";
extend("secret", {
  validate: (value) => value === "example",
  message: "This is not the magic word",
});

const text = ref("");
const magic = ref("");
</script>

<template>
  <div>
    <ValidationProvider rules="secret" v-slot="{ errors }">
      <b-form-input
        v-model="magic"
        placeholder="Enter your name"
      ></b-form-input>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <b-form-input
      v-model="text"
      v-maska="'+1 (###) ##-##-##'"
      placeholder="Enter your name"
    ></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>
