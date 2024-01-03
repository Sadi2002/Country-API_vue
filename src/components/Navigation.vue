<template>
  <nav :class="{ darkNav: countries.theme === 'dark' }" class="navigation">
    <h2
      :class="{ darkMode: countries.theme === 'dark' }"
      class="navigation-title"
    >
      Where is the world?
    </h2>
    <div @click="countries.switchTheme" class="navigation-theme-mode">
      <i
        :class="{ darkMode: countries.theme === 'dark' }"
        class="far fa-moon"
      ></i>
      <span :class="{ darkMode: countries.theme === 'dark' }">Dark Mode</span>
    </div>
  </nav>
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
