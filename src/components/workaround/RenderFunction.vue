<script>
import { onMounted, h as _h, getCurrentInstance } from "@vue/composition-api";

export default {
  setup(_, ctx) {
    const vm = getCurrentInstance();
    const h = _h.bind(vm);
    onMounted(() => {
      console.log(ctx.slots); // SLOTS AVAILABLE HERE
    });
    return () => h("h1", "hello");
  },
};
</script>

<template></template>
