import Vue from 'vue';
import Vuex from 'vuex';
import Covid19Tracking from '@/components/Covid19Tracking';
import ListCountries from '@/components/ListCountries';
import CountryCaseDetail from '@/components/CountryCaseDetail';
import { createLocalVue, shallowMount  } from '@vue/test-utils';

const localVue = createLocalVue()

localVue.use(Vuex);

describe('Covid19Tracking.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      loadCountries: jest.fn(),
      changeSelectedCountry: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('has computed', () => {
    expect(typeof Covid19Tracking.computed).toBe('object');
  })

  it('has components', () => {
    const wrapper = shallowMount(Covid19Tracking, { store, localVue });
    const listcom = wrapper.findComponent(ListCountries); 
    const detailcom = wrapper.findComponent(CountryCaseDetail);

    expect(listcom.exists()).toBe(true);
    expect(detailcom.exists()).toBe(true);
    expect(typeof Covid19Tracking.components.ListCountries).toBe('object');
    expect(typeof Covid19Tracking.components.CountryCaseDetail).toBe('object');
  })
});
