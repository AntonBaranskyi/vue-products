<template>
  <div class="order-modal shadow-sm">
    <div class="order-modal__info">
      <div class="orders-modal__add">
        <p>Add product</p>
        <img class="icon icon-md" src="../assets/icons/add.png" alt="Add" />
      </div>
      <h2 class="order-modal__title">{{ orderActive.title }}</h2>

      <img
        src="../assets/icons/close.png"
        alt="close"
        class="icon icon-close"
        @click="onCloseModal"
      />
    </div>

    <OrderModalItem
      v-if="orderActive.products.length > 0"
      v-for="activeOrder in orderActive.products"
      :key="activeOrder._id"
      :activeOrder="activeOrder"
    />

    <p class="empty" v-else>List is empty! Please add a product</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import OrderModalItem from './OrderModalItem.vue';
export default {
  computed: {
    ...mapState('orders', {
      orderActive: (state) => state.orderActive,
    }),
  },
  methods: {
    ...mapActions({
      onOpenOrder: 'orders/onOpenOrder',
      onPutActiveOrder: 'orders/onPutActiveOrder',
    }),
    onCloseModal() {
      this.onOpenOrder(false);
      this.onPutActiveOrder(null);
    },
  },
  components: { OrderModalItem },
};
</script>

<style lang="scss" scoped>
.order-modal {
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 15px;

  border-radius: 5px;

  background-color: white;

  gap: 15px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

p {
  display: inline-block;
  margin-right: 5px;
  font-weight: 500;
}

.empty {
  text-align: center;
  line-height: 200px;
}

@import '../styles/icon.scss';
</style>
