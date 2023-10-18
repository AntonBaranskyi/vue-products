<template>
  <div class="orders">
    <div class="container orders__info">
      <h1>Orders / {{ orders.length }}</h1>
    </div>

    <div class="orders__container">
      <OrderItem v-for="order in orders" :key="order._id" :order="order" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import OrderItem from './OrderItem.vue';
export default {
  components: {
    OrderItem,
  },
  computed: {
    ...mapState('orders', {
      orders: (state) => state.orders,
    }),
  },
  methods: {
    ...mapActions({
      onGetOrders: 'orders/onGetOrders',
    }),
  },

  mounted() {
    this.onGetOrders();
  },
};
</script>

<style lang="scss" scoped>
.orders {
  grid-column: 3/13;
  &__info {
    padding-top: 40px;

    text-align: center;
    margin-bottom: 50px;
  }
  &__container {
    display: flex;
    flex-direction: column;

    gap: 30px;
    padding-inline: 25px;
  }
}
</style>
