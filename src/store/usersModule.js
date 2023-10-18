import { fetchUsers } from '../api/authAPI';

export const usersModule = {
  state: () => ({
    users: [],
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
  },
  namespaced: true,
};
