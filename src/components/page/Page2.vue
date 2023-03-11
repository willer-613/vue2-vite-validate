<script setup>
import { useCounterStore } from "@/stores/useCounter";
const counter = useCounterStore();
function addCount() {
  counter.increment();
}
function home() {
  this.$router.push("/");
  console.log("but do you see me tho?");
}
</script>

<template>
  <div>
    page 2
    <button @click="home">home</button>
    <hr />
    <p style="margin: 2rem 0; text-align: center">
      {{ `Times clicked: ${counter.count}` }}
    </p>
    <b-button @click="addCount">increment</b-button>
  </div>
</template>
