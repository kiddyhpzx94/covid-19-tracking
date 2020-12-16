import ListCountries from '@/components/ListCountries';
import Vuex from 'vuex';
import { createLocalVue, shallowMount  } from '@vue/test-utils';

const localVue = createLocalVue()

localVue.use(Vuex);

describe('ListCountries.vue', () => {
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
    expect(typeof ListCountries.computed).toBe('object');
  })

  it('has methods', () => {
    expect(typeof ListCountries.methods.getAllCountries).toBe('function');
    expect(typeof ListCountries.methods.selectCountry).toBe('function');
  })

  it('action changeSelectedCountry to be called when click to an dropdown item', () => {
    const wrapper = shallowMount(ListCountries, { store, localVue })
    const dropdownitem = wrapper.find('a');
    dropdownitem.trigger('click');
    expect(actions.changeSelectedCountry).toHaveBeenCalled;
  })

  it('action loadCountries to be called', () => {
    shallowMount(ListCountries, { store, localVue })
    expect(actions.loadCountries).toHaveBeenCalled;
  })
});
