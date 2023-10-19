import { fetchUsers } from '../api/authAPI';

export const usersModule = {
  state: () => ({
    users: [],
    userCount: 0,
    usersLoading: false,
  }),

  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = [...users];
    },

    setLoading(state, bool) {
      state.usersLoading = bool;
    },

    setUserCount(state, count) {
      state.userCount = count;
    },
  },
  actions: {
    onGetUsers({ commit }) {
      commit('setLoading', true);
      fetchUsers()
        .then((answ) => {
          commit('setUsers', answ);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },

    onChangeCount({ commit }, count) {
      commit('setUserCount', count);
    },
  },
  namespaced: true,
};
