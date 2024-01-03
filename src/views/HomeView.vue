<template>
  <Navigation />
  <Search />
  <Countries />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Search from "../components/Search.vue";
import Countries from "../components/Countries.vue";
export default {
  name: "HomeView",
  components: {
    Navigation,
    Search,
    Countries,
  },
};
</script>
