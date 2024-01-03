<template>
  <div class="filter">
    <select>
      <option value="" disabled selected>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    <i class="fas fa-chevron-down"></i>
  </div>
</template>

<script>
import { country } from "../store/store";
export default {
  setup() {
    const countries = country();
    return {
      countries,
    };
  },
};
</script>
