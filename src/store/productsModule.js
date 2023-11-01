import { fetchProducts } from '../api/authAPI';
import { addProduct, deleteProduct } from '../api/productsAPI';

export const productsModule = {
  state: () => ({
    products: [],
    productsLoading: false,
    loadingIds: [],
    addProductError: '',
    addedProduct: null,
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

    onAddNewProduct(state, product) {
      state.products = [...state.products, product];
    },

    onSetError(state) {
      state.addProductError = 'Cannot add Product';
    },
    setAddedProduct(state, product) {
      state.addedProduct = product;
    },

    onClearAddedProduct(state) {
      state.addedProduct = null;
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

    async onAddProduct({ commit }, data) {
      try {
        const answ = await addProduct(data);
        commit('onAddNewProduct', answ);
        commit('setAddedProduct', answ);
        return answ;
      } catch (error) {
        commit('onSetError');
        throw error;
      }
    },
  },

  namespaced: true,
};
