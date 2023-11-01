import { fetchOrders } from '../api/authAPI';
import { createOrder, deleteOrder } from '../api/ordersAPI';

export const ordersModule = {
  state: () => ({
    orders: [],
    isOrderOpen: false,
    ordersLoading: false,
    orderActive: null,
    loadingIds: [],
    orderError: '',
    tempOrder: null,
  }),

  getters: {},
  mutations: {
    setOrders(state, data) {
      state.orders = [...data];
    },

    setLoading(state, bool) {
      state.ordersLoading = bool;
    },

    setOrderOpen(state, bool) {
      state.isOrderOpen = bool;
    },

    setAciveOrder(state, data) {
      state.orderActive = data;
    },

    setLoadingIds(state, id) {
      state.loadingIds = [...state.loadingIds, id];
    },

    clearLoading(state) {
      state.loadingIds = [];
    },
    deletingOrder(state, id) {
      state.orders = state.orders.filter((item) => item._id !== id);
    },

    setOrderError(state) {
      state.orderError = 'Cannot create Order';
    },

    onSetTempOrder(state, order) {
      state.tempOrder = order;
    },

    onClearTempOrder(state) {
      state.tempOrder = null;
    },

    onAddNewOrder(state, order) {
      state.orders = [...state.orders, order];
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

    onDeleteOrder({ commit }, id) {
      commit('setLoadingIds', id);

      deleteOrder(id)
        .then(() => {
          commit('deletingOrder', id);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          commit('clearLoading');
        });
    },

    onAddOrder({ commit }, title) {
      const newOrder = {
        title,
      };

      commit('onSetTempOrder', { ...newOrder, id: Date.now(), products: [] });

      createOrder(newOrder)
        .then((answ) => {
          commit('onAddNewOrder', answ);
        })
        .catch(() => {
          commit('setOrderError');
        })
        .finally(() => {
          commit('onClearTempOrder');
        });
    },

    onOpenOrder({ commit }, isOpen) {
      commit('setOrderOpen', isOpen);
    },

    onPutActiveOrder({ commit }, data) {
      commit('setAciveOrder', data);
    },
  },

  namespaced: true,
};
