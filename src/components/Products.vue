<template>
  <div class="products">
    <div class="products__container container">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  components: {
    ProductItem,
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
