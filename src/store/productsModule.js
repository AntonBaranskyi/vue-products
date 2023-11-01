import { fetchProducts } from '../api/authAPI';
import { deleteProduct } from '../api/productsAPI';

export const productsModule = {
  state: () => ({
    products: [],
    productsLoading: false,
    loadingIds: [],
  }),

  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = [...data];
    },

    setLoading(state, bool) {
      state.productsLoading = bool;
    },

    setLoadingIds(state, id) {
      state.loadingIds = [...state.loadingIds, id];
    },

    deletingProduct(state, id) {
      state.products = state.products.filter((item) => item._id !== id);
    },

    clearLoading(state) {
      state.loadingIds = [];
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

    onDeleteProduct({ commit }, id) {
      commit('setLoadingIds', id);

      deleteProduct(id)
        .then(() => {
          commit('deletingProduct', id);
        })
        .finally(() => {
          commit('clearLoading');
        });
    },
  },

  namespaced: true,
};
