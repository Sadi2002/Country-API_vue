<template>
  <Navigation />
  <Search />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Search from "../components/Search.vue";
export default {
  name: "HomeView",
  components: {
    Navigation,
    Search,
  },
};
</script>
