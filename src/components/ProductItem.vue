<template>
  <div class="item">
    <div class="item__online"></div>
    <img class="item__photo" src="../assets/screen.jpg" alt="screen" />

    <div class="item__name-wrapper">
      <p class="item__name">
        {{ product.title }}
      </p>

      <p class="item__code">SN-{{ product.serialNumber }}</p>
    </div>

    <p
      class="item__ready"
      :class="{
        'text-success': product.isNew === 1,
        'text-danger': product.isNew !== 1,
      }"
    >
      {{ product.isNew === 1 ? 'Free' : 'Engaged' }}
    </p>

    <div class="item__date">
      <div class="item__date-wrapper">
        <span>C</span>
        <p class="item__date-start">
          {{ this.formatDate(product.guarantee.start) }}
        </p>
      </div>

      <div class="item__date-wrapper">
        <span>По</span>
        <p class="item__date-start">
          {{ this.formatDate(product.guarantee.end) }}
        </p>
      </div>
    </div>
    <p class="item__status">New</p>

    <div class="item__prices">
      <p class="item__prices-dolar">{{ formatPrice(product, 'USD') }}</p>
      <p class="item__prices-uan">{{ formatPrice(product, 'UAH') }}</p>
    </div>

    <p class="item__group-name">
      {{ product.orders[0].title }}
    </p>

    <p class="item__owner">{{ product.user.fullName }}</p>

    <div class="item__date">
      <p class="item__date-start">
        {{ this.formatDate(product.guarantee.start) }}
      </p>
    </div>

    <img
      @click="onDeleteProduct(product._id)"
      class="icon item__delete"
      src="../assets/bin.png"
      alt="delete"
    />

    <div class="backdrop" v-if="loadingIds.includes(product._id)">
      <div class="spinner-border spinner-position" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  props: {
    product: {
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

    formatDate(isoDate) {
      const date = new Date(isoDate);
      const day = date.getUTCDate().toString().padStart(2, '0');
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const year = date.getUTCFullYear();

      return `${month}/${day}/${year}`;
    },

    formatPrice(product, symbol) {
      const price = product.price.find((p) => p.symbol === symbol);
      if (price) {
        return `${price.value} ${symbol}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/orderItem.scss';
.icon {
  width: 24px;
  height: 24px;
}

@import '../styles/backdrop.scss';
.spinner-position {
  position: absolute;
  left: 50%;
}
</style>
