<script setup>
import { ref } from "@vue/composition-api";

const dismissSecs = ref(10);
const dismissCountDown = ref(0);
const showDismissibleAlert = ref(false);

function countDownChanged(newDismissCountDown) {
  dismissCountDown.value = newDismissCountDown;
}
function showAlert() {
  dismissCountDown.value = +dismissSecs.value;
}
</script>

<template>
  <div>
    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
  </div>
</template>
