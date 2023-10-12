<template>
  <div class="orders">
    <div class="container orders__info">
      <h1>Orders / 5</h1>
    </div>

    <div class="orders__container">
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  </div>
</template>

<script>
import OrderItem from './OrderItem.vue';
export default {
  components: {
    OrderItem,
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
