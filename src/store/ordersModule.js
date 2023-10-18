import { fetchOrders } from '../api/authAPI';

export const ordersModule = {
  state: () => ({
    orders: [],
    ordersLoading: false,
  }),

  getters: {},
  mutations: {
    setOrders(state, data) {
      state.orders = [...data];
    },

    setLoading(state, bool) {
      state.ordersLoading = bool;
    },
  },

  actions: {
    onGetOrders({ commit }) {
      commit('setLoading', true);

      fetchOrders()
        .then((answ) => {
          commit('setOrders', answ);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
  },

  namespaced: true,
};
