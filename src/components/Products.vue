<template>
  <div class="products">
    <div class="products__container container">
      <div
        v-if="productsLoading"
        class="d-flex justify-content-center align-items-center"
      >
        <div class="spinner-border" role="status"></div>
      </div>
      <div v-else>
        <div class="flex" v-if="sortedAndSearchedProducts.length > 0">
          <ProductItem
            v-for="product in sortedAndSearchedProducts"
            :key="product._id"
            :product="product"
          />
        </div>
        <template v-else>
          <p>No products found.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

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
      productsLoading: (state) => state.productsLoading,
    }),

    ...mapGetters({
      sortedProducts: 'products/sortedProducts',
      sortedAndSearchedProducts: 'products/sortedAndSearchedProducts',
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

  .flex {
    display: flex;

    flex-direction: column;
    gap: 40px;
  }
}
</style>
