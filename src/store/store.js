import { createStore } from 'vuex';
import { authenticationModule } from './authenticationModule';

export default createStore({
  state: {},
  modules: {
    auth: authenticationModule,
  },
});
