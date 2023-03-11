<script setup>
import { computed } from "@vue/composition-api";
import "./button.css";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "medium",
    validator: function (value) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
});

const emit = defineEmits(["onClick"]);
const classes = computed(() => {
  return {
    "storybook-button": true,
    "storybook-button--primary": props.primary,
    "storybook-button--secondary": !props.primary,
    [`storybook-button--${props.size}`]: true,
  };
});

const style = computed(() => {
  return {
    backgroundColor: props.backgroundColor,
  };
});

function onClick() {
  emit("onClick");
}
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>
