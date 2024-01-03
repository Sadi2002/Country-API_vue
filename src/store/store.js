import { defineStore } from "pinia";

export const country = defineStore("countries", {
  state: () => ({
    allCountries: [],
    theme: "white",
  }),
  actions: {
    async getCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countriesData = await response.json();

        countriesData.forEach((countryData) => {
          const flags = countryData.flags;
          const pngFlag = flags && flags.png;

          const capital = countryData.capital;
          const capitalValue =
            Array.isArray(capital) && capital.length > 0 ? capital[0] : null;

          this.allCountries.push({
            title: countryData.name.common,
            population: countryData.population,
            region: countryData.region,
            capital: capitalValue,
            img: pngFlag,
          });
        });
      } catch (error) {
        console.error("Błąd pobierania danych krajów:", error);
      }
    },
    switchTheme() {
      this.theme = this.theme === "white" ? "dark" : "white";
      document.body.style.backgroundColor =
        this.theme === "white" ? "#fff" : "rgb(39, 50, 57)";
    },
  },
});
