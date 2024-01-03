<template>
  <div class="search-container">
    <div class="search">
      <input
        type="text"
        v-model="countryName"
        placeholder="Search for a country..."
      />
      <i class="fas fa-search"></i>
    </div>
    <Filter />
  </div>
</template>

<script>
import Filter from "./Filter.vue";
export default {
  components: { Filter },
};
</script>
