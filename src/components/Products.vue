<template>
  <div class="products">
    <div class="products__container container">
      <ProductItem
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    console.log('MOUNT');
    this.onGetProducts();
  },
  components: {
    ProductItem,
  },

  computed: {
    ...mapState('products', {
      products: (state) => state.products,
    }),
  },
  methods: {
    ...mapActions({
      onGetProducts: 'products/onGetProducts',
    }),
  },
};
</script>

<style lang="scss" scoped>
.products {
  overflow-x: auto;

  overflow-x: auto;
  white-space: nowrap;

  margin-left: 15px;

  padding-right: 10px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  &::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
