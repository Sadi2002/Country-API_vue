<template>
  <div class="search-container">
    <div class="search">
      <input
        type="text"
        v-model="countries.countryName"
        @input="countries.filterCountries"
        placeholder="Search for a country..."
      />
      <i class="fas fa-search"></i>
    </div>

    <Filter />
  </div>
</template>

<script>
import Filter from "./Filter.vue";
import { country } from "../store/store";
export default {
  components: { Filter },
  setup() {
    const countries = country();

    return {
      countries,
    };
  },
};
</script>
