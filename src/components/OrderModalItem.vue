<template>
  <div class="item shadow-lg item-heigth">
    <div class="item__online"></div>
    <img class="item__photo" src="../assets/screen.jpg" alt="screen" />

    <div class="item__name-wrapper">
      <p class="item__name">
        {{ activeOrder.title }}
        sdfd
      </p>

      <p class="item__code">SN-{{ activeOrder.serialNumber }}</p>
    </div>

    <p class="item__ready">Свободен</p>

    <img
      @click="onDeleteProduct(activeOrder._id)"
      class="icon item__delete"
      src="../assets/bin.png"
      alt="delete"
    />
    <div class="backdrop" v-if="loadingIds.includes(activeOrder._id)">
      <div class="spinner-border spinner-position" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: {
    activeOrder: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState('products', {
      loadingIds: (state) => state.loadingIds,
    }),

    ...mapState('orders', {
      orders: (state) => state.orders,
    }),
  },

  methods: {
    ...mapActions({
      onDeleteProduct: 'products/onDeleteProduct',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/icon.scss';

@import '../styles/orderItem.scss';
@import '../styles/backdrop.scss';
</style>
