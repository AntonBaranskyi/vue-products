import { fetchProducts } from '../api/authAPI';
import { addProduct, deleteProduct } from '../api/productsAPI';

export const productsModule = {
  state: () => ({
    products: [],
    productsLoading: false,
    loadingIds: [],
    addProductError: '',
    addedProduct: null,
    searchQuery: '',
    selectedSort: '',
  }),

  getters: {
    sortedProducts(state) {
      if (state.selectedSort) {
        return state.products.filter(
          (product) => product.orders[0].title === state.selectedSort
        );
      }

      return state.products;
    },

    sortedAndSearchedProducts(state, getters) {
      if (state.searchQuery) {
        return getters.sortedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      return getters.sortedProducts;
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = [...data];
    },

    setLoading(state, bool) {
      state.productsLoading = bool;
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
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
    onChangeSearchQuery({ commit }, term) {
      commit('setSearchQuery', term);
    },

    onChangeSortQuery({ commit }, term) {
      commit('setSelectedSort', term);
    },

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
