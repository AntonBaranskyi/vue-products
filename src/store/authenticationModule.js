import { fetchLogin, fetchRegister } from '../api/authAPI';

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

    setSignUpError(state, bool) {
      state.signUpError = bool;
    },
  },
  actions: {
    onChangeIsAuth({ commit }, bool) {
      commit('setIsAuth', bool);
    },
    async onSendLogin({ commit }, data) {
      try {
        commit('setLogginError', false);

        const answ = await fetchLogin(data);
        console.log(data);

        commit('setUserData', answ);
        commit('setIsAuth', true);

        return answ;
      } catch (error) {
        commit('setLogginError', true);
      }
    },

    onSendSignUp({ commit }, data) {
      commit('setSignUpError', false);

      fetchRegister(data)
        .then((answ) => {
          commit('setUserData', answ);
          commit('setIsAuth', true);
        })
        .catch(() => {
          commit('setSignUpError', true);
        });
    },
  },
  namespaced: true,
};
