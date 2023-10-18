import { createStore } from 'vuex';
import { authenticationModule } from './authenticationModule';
import { usersModule } from './usersModule';
import { productsModule } from './productsModule';
import { ordersModule } from './ordersModule';

export default createStore({
  state: {},
  modules: {
    auth: authenticationModule,
    users: usersModule,
    products: productsModule,
    orders: ordersModule,
  },
});
