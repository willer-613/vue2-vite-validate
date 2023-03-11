import { defineStore } from "pinia";

export const useRundomNum = defineStore("rundomNum", {
  state: () => {
    return {};
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getRundomNum() {
      return Math.floor(Math.random() * 10);
    },
  },
});
