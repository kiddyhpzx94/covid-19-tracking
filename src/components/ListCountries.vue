<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{selectedCountry}}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div v-for="item in countries" :key="item.id">
                <a class="dropdown-item" v-on:click="selectCountry(item.Country)">{{item.Country}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ListCountries",
  mounted() {
    this.getAllCountries();
  },
  methods: {
    getAllCountries() {
      this.$store.dispatch("loadCountries");
    },
    selectCountry(country) {
      this.$store.dispatch("changeSelectedCountry", country);
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries;
    },
    selectedCountry() {
      return this.$store.getters.selectedCountry;
    }
  },
};
</script>

<style scoped>
.dropdown-menu {
  height: 400px;
  overflow-y: auto;
}
</style>
