import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const URL_GET_ALL_COUNTRIES ='https://api.covid19api.com/countries';
const URL_GET_DETAL_BY_COUNTRY = 'https://api.covid19api.com/dayone/country/';

export const store = new Vuex.Store({
  state: {
    countries: [],
    selectedCountry: 'Select a country',
    countryDetail: {
      Active: null,
      Death: null,
      Confirmed: null
    }
  },
  mutations: {
    SAVE_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    SAVE_SELECTED_COUNTRY(state, country) {
      state.selectedCountry = country;
    },
    SAVE_COUNTRY_DETAIL(state, countryDetail) {
      state.countryDetail = countryDetail
    }
  },
  actions: {
    loadCountries({commit}) {
      Vue.axios.get(URL_GET_ALL_COUNTRIES).then(result => {
        if (result.data.length > 0) {
          return commit('SAVE_COUNTRIES', result.data);
        }

        commit('SAVE_COUNTRIES', []);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    changeSelectedCountry({commit}, selectedCountry) {
      Vue.axios.get(URL_GET_DETAL_BY_COUNTRY + selectedCountry).then(result => {
        if (result.data.length > 0) {
          commit('SAVE_COUNTRY_DETAIL', result.data[result.data.length-1]);
          commit('SAVE_SELECTED_COUNTRY', selectedCountry);
          return;
        }
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },

  getters: {
    countries(state) {
      return state.countries;
    },
    selectedCountry(state) {
      return state.selectedCountry;
    },
    countryDetail(state) {
      return state.countryDetail;
    }
  }
});
