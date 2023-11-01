<template>
  <AddOrder v-model:orderAddModal="orderAddModal" />

  <div class="orders">
    <div class="container orders__info">
      <div class="orders__add">
        <p>Add order</p>
        <img
          @click="onTriggerModal"
          class="icon icon-lg"
          src="../assets/icons/add.png"
          alt=""
        />
      </div>
      <h1>Orders / {{ orders.length }}</h1>
    </div>

    <div :class="isOrderOpen ? 'flex' : ''">
      <div class="orders__container" :class="isOrderOpen ? 'modal-open' : ''">
        <div
          v-if="ordersLoading"
          class="d-flex justify-content-center align-items-center"
        >
          <div class="spinner-border" role="status"></div>
        </div>

        <OrderItem
          v-else
          v-for="order in orders"
          :key="order._id"
          :order="order"
        />
      </div>

      <OrderModal v-if="isOrderOpen" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import OrderItem from './OrderItem.vue';
import OrderModal from './OrderModal.vue';
import AddOrder from './AddOrder.vue';
export default {
  components: {
    OrderItem,
    OrderModal,
    AddOrder,
  },

  data() {
    return {
      orderAddModal: false,
    };
  },
  computed: {
    ...mapState('orders', {
      orders: (state) => state.orders,
      ordersLoading: (state) => state.ordersLoading,
      isOrderOpen: (state) => state.isOrderOpen,
    }),
  },
  methods: {
    ...mapActions({
      onGetOrders: 'orders/onGetOrders',
    }),

    onTriggerModal() {
      this.orderAddModal = !this.orderAddModal;
    },
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
    display: flex;
    justify-content: center;

    align-items: center;

    gap: 25px;
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

  .modal-open {
    width: 600px;
  }

  .flex {
    display: flex;

    gap: 25px;

    /* width: 100px; */
  }

  p {
    display: inline-block;
    margin-right: 5px;
    font-weight: 500;
  }
  @import '../styles/icon.scss';
}
</style>
