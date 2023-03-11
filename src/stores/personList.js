import { defineStore } from "pinia";
import { useRundomNum } from "@/stores/randomNum";
console.log(useRundomNum);

export const usePersonListStore = defineStore("personList", {
  state: () => {
    return {
      list: [
        { name: "Nagisa", age: "25" },
        { name: "Daniel", age: "28" },
      ],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addMember() {
      const randomNumStore = useRundomNum();
      this.list.push({
        name: "Sumi",
        age: "30",
      });
    },
  },
});
