<script setup>
import { ref } from "@vue/composition-api";

const fields = ref([
  {
    key: "last_name",
    sortable: true,
  },
  {
    key: "first_name",
    sortable: false,
  },
  {
    key: "age",
    label: "Person age",
    sortable: true,
    // Variant applies to the whole column, including the header and footer
    variant: "danger",
  },
]);
const items = ref([
  {
    isActive: true,
    age: 40,
    first_name: "Dickerson",
    last_name: "Macdonald",
  },
  { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
  { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
  { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
]);
</script>
<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
