import { fetchLogin } from '../api/authAPI';

export const authenticationModule = {
  state: () => ({
    userData: null,
    isAuth: false,
    logginError: false,

    signUpError: false,
  }),
  getters: {},
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },

    setIsAuth(state, bool) {
      state.isAuth = bool;
    },

    setLogginError(state, bool) {
      state.logginError = bool;
    },

  },
  actions: {
    onSendLogin({ commit }, data) {
      commit('setLogginError', false);
      console.log(data);
      fetchLogin(data)
        .then((answ) => {
          commit('setUserData', answ);
          commit('setIsAuth', true);
        })
        .catch(() => {
          commit('setLogginError', true);
        });
    },

    onSendSignUp({ commit }, data) {},
  },
  namespaced: true,
};
