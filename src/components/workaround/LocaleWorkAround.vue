<script setup>
import { useI18n } from "vue-i18n-composable";
const { t, locale } = useI18n();
const item = useI18n();
const options = ["en", "ja"];
</script>
<template>
  <div>
    <p>{{ t("error.system_error") }}</p>
    <p>{{ t("first_name_form.title") }}</p>
    <b-form-select v-model="locale" :options="options"></b-form-select>
  </div>
</template>
