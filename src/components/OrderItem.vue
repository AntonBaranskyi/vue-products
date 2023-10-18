<template>
  <div class="order">
    <p class="order__name">{{ order.title }}</p>

    <div class="order__more">
      <div @click="isOpenModal = !isOpenModal" class="order__more-icon">
        <img
          src="../assets/icons/more.png"
          class="order__more-item icon"
          alt="more"
        />
      </div>

      <div class="order__more-product">
        <p>{{ order.products.length }}</p>
        <p>Products</p>
      </div>
    </div>

    <div class="order__date">
      <p class="order__date-start">06/04/2017</p>
      <p>06 /Sept / 2017</p>
    </div>

    <div class="order__prices">
      <p class="order__prices-dolar">{{ getTotalPrice(order, 'USD') }}$</p>
      <p class="order__prices-uan">{{ getTotalPrice(order, 'UAH') }} UAH</p>
    </div>

    <img class="icon order__delete" src="../assets/bin.png" alt="delete" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenModal: false,
    };
  },

  methods: {
    getTotalPrice(order, currency) {
      let totalPrice = 0;
      for (const product of order.products) {
        for (const price of product.price) {
          if (price.symbol === currency) {
            totalPrice += price.value;
          }
        }
      }

      return totalPrice;
    },
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;

  height: 100px;
  background-color: #fff;

  padding-inline: 20px;

  border: 1px solid #e6e6e6;

  &__more {
    display: flex;

    gap: 15px;

    &-icon {
      position: relative;
      border: 1px solid lightgray;
      height: 42px;
      width: 42px;
      border-radius: 50%; /* Зробити контейнер круглим */
      overflow: hidden; /* Відсікти круглу форму на вмісті контейнера */

      cursor: pointer;
    }

    &-item {
      position: absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      object-fit: cover;
    }

    &-product {
      display: flex;
      flex-direction: column;
    }
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  &__delete {
    cursor: pointer;
  }
}
</style>
