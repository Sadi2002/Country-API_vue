import { defineStore } from "pinia";

export const country = defineStore("countries", {
  state: () => ({
    filters: null,
  }),
});
