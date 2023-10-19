<template>
  <div class="products">
    <div class="container">
      <div class="products__info products__info-align">
        <h1 class="products__title title">Products / {{ products.length }}</h1>
        <FilterProducts />
      </div>
    </div>

    <Products />
  </div>
</template>

<script>
import FilterProducts from './FilterProducts.vue';
import Products from './Products.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('products', {
      products: (state) => state.products,
    }),
  },
  components: {
    FilterProducts,
    Products,
  },
};
</script>

<style lang="scss" scoped>
.products {
  grid-column: 3/13;

  &__info {
    display: flex;
    justify-content: center;
    gap: 40px;

    &-align {
      padding-top: 40px;

      margin-bottom: 50px;
    }
  }
}
</style>
