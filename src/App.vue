<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import BaseAlert from "./components/base/BaseAlert.vue";
// import BaseDatePicker from "./components/base/BaseDatePicker.vue";
// import BaseInput from "./components/base/BaseInput.vue";
// import BaseTable from "./components/base/BaseTable.vue";

// import LocaleWorkAround from "./components/workaround/LocaleWorkAround.vue";
// import OrmWorkAround from "./components/workaround/OrmWorkAround.vue";
// import RenderFunction from "./components/workaround/RenderFunction.vue";
// import AxiosCall from "./components/workaround/AxiosCall.vue";

import List from "./components/workaround/List.vue";
import { useCounterStore } from "@/stores/useCounter";
import localeValidate from "./components/workaround/localeValidate.vue";

// import { inject } from "@vue/composition-api";

// const i18n = inject("i18n");

// console.log(i18n.greetings.hello);

// ------------------Pinia-------------------------
// counter.count++;
// with autocompletion ✨
// counter.$patch({ count: counter.count + 1 });
// or using an action instead

const counter = useCounterStore();
function addCount() {
  counter.increment();
}
function navigate() {
  this.$router.push("/2");
  console.log("but do you see me tho?");
}

console.log(counter);
</script>
<template>
  <div id="app">
    <!-- <AxiosCall /> -->
    <!-- <LocaleWorkAround />
    <hr style="margin: 4rem 0" />
    <OrmWorkAround />
    <hr style="margin: 4rem 0" /> 
    <h1>{{ $translate("greetings.hello") }}</h1>
    <RenderFunction />
    -->
    <localeValidate />
    <!-- <router-view></router-view>
    <List />

    <button @click="navigate">navigate</button>
    <b-button @click="addCount">increment</b-button> -->
    <!--
    <hr style="margin: 4rem 0" />
    <BaseInput />
    <hr style="margin: 4rem 0" />
    <BaseAlert />
    <hr style="margin: 4rem 0" />
    <BaseDatePicker />
    <hr style="margin: 4rem 0" />
    <BaseTable /> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px 60px 60px 60px;
}
</style>
