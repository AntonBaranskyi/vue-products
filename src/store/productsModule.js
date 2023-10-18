import { fetchProducts } from '../api/authAPI';

export const productsModule = {
  state: () => ({
    products: [],
    productsLoading: false,
  }),

  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = [...data];
    },

    setLoading(state, bool) {
      state.productsLoading = bool;
    },
  },

  actions: {
    onGetProducts({ commit }) {
      commit('setLoading', true);

      fetchProducts()
        .then((answ) => {
          commit('setProducts', answ);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
  },

  namespaced: true,
};
