<template>
  <div>
    <ListCountries />
    <CountryCaseDetail />
  </div>
</template>

<script>
import ListCountries from './ListCountries.vue';
import CountryCaseDetail from './CountryCaseDetail';

export default {
  name: "Covid19Tracking",
  components: {
    ListCountries,
    CountryCaseDetail
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
