<template>
  <div>
    <p class="date">{{ countryDetail.Date | formatDate }}</p>
    <div class="country-detail">
      <div class="container">
        <div class="row">
          <div class="col text-center"><h3>Confirmed</h3></div>
          <div class="col text-center"><h3>Active</h3></div>
          <div class="col text-center"><h2>Recovered case</h2></div>
          <div class="col text-center"><h3>Deaths</h3></div>
        </div>
      </div>
      <div class="container">
        <div class="row text">
          <div class="col text-center">
            <h2 class="text-warning">{{ countryDetail.Confirmed }}</h2>
          </div>
          <div class="col text-center">
            <h2 class="text-danger">{{ countryDetail.Active }}</h2>
          </div>
          <div class="col text-center">
            <h2 class="text-success">{{ countRecoverCases() }}</h2>
          </div>
          <div class="col text-center">
            <h2 class="text-grey">{{ countryDetail.Deaths }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCaseDetail",
  mounted() {},
  methods: {
    countRecoverCases() {
      if (
        !isNaN(this.countryDetail.Active) &&
        !isNaN(this.countryDetail.Confirmed) &&
        !isNaN(this.countryDetail.Deaths)
      ) {
        return (
          this.countryDetail.Confirmed -
          this.countryDetail.Active -
          this.countryDetail.Deaths
        );
      } else {
        return "";
      }
    },
  },
  computed: {
    countryDetail() {
      return this.$store.getters.countryDetail;
    },
    selectedCountry() {
      return this.$store.getters.selectedCountry;
    },
  },
  filters: {
    formatDate: function (value) {
      if (!value) {
        return '';
      }
      
      var datetime = new Date(value);
      datetime = datetime.toLocaleString();
      return datetime;
    }
  }
};
</script>

<style scoped>
.country-detail {
  margin: 10px;
  text-align: left;
  border: 2px solid #cecece;
  padding: 10px 10px;
  border-radius: 5px;
  width: 80%;
}

.date {
  text-align: left;
  margin-left: 10px;
  color: #999393;
}
.text h2{
  font-weight: 700;
}
.text-danger {
  color: #E75552;
}

.text-sucess {
  color: #00A19C;
}

.text-warning {
  color: #FFBE4F;
}

.text-grey {
  color: #9f9f9f;
}
</style>
