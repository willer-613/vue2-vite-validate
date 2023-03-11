<script setup>
import { ref, computed, onMounted } from "@vue/composition-api";
import { usePersonListStore } from "@/stores/personList";
import { useI18n } from "vue-i18n-composable/src/index";

const personListStore = usePersonListStore();
console.log(personListStore);
const list = computed(() => personListStore.list);
const { t } = useI18n();
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        name: {{ item.name }}, age: {{ item.age }}
      </li>
    </ul>
  </div>
</template>
