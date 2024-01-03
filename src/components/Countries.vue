<template>
  <div class="countries-container">
    <div style="display: contents" v-if="!countries.countryName">
      <div
        v-for="country in countries.allCountries"
        :key="country.title"
        class="country"
      >
        <img :src="country.img" alt="" />
        <div class="country-info">
          <h3 class="country-title">{{ country.title }}</h3>
          <div class="country-details">
            <p class="detail">
              Population: <span>{{ country.population }}</span>
            </p>
            <p class="detail">
              Region: <span>{{ country.region }}</span>
            </p>
            <p class="detail">
              Capital: <span>{{ country.capital }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="display: contents" v-else>
      <div
        v-for="country in countries.filteredCountries"
        :key="country.title"
        class="country"
      >
        <img :src="country.img" alt="" />
        <div class="country-info">
          <h3 class="country-title">{{ country.title }}</h3>
          <div class="country-details">
            <p class="detail">
              Population: <span>{{ country.population }}</span>
            </p>
            <p class="detail">
              Region: <span>{{ country.region }}</span>
            </p>
            <p class="detail">
              Capital: <span>{{ country.capital }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { country } from "../store/store";

export default {
  setup() {
    const countries = country();

    onMounted(() => {
      countries.getCountries();
    });

    return {
      countries,
    };
  },
};
</script>
