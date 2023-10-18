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

    <p class="item__ready">Свободен</p>

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
    <p class="item__status">Новий</p>

    <div class="item__prices">
      <p class="item__prices-dolar">{{ formatPrice(product, 'USD') }}</p>
      <p class="item__prices-uan">{{ formatPrice(product, 'UAH') }}</p>
    </div>

    <p class="item__group-name">
      Дуже довго предовга дуже прям дуже дуже дуже велика назва групи
    </p>

    <p class="item__owner">Христодорожненський Олександр</p>

    <p class="item__group-name">
      Дуже довго предовга дуже прям дуже дуже дуже велика назва прихода
    </p>

    <div class="item__date">
      <p class="item__date-start">
        {{ this.formatDate(product.guarantee.start) }}
      </p>
      <p>{{ this.formatDate(product.guarantee.end) }}</p>
    </div>

    <img class="icon item__delete" src="../assets/bin.png" alt="delete" />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
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
.item {
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;

  min-width: fit-content;
  gap: 35px;

  background-color: #fff;

  padding-inline: 35px;

  border-radius: 10px;

  &__online {
    flex: 0 0 auto;
    width: 16px;
    height: 16px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
  }

  &__photo {
    width: 70px;
    height: 70px;

    object-fit: contain;
  }

  &__date-wrapper {
    display: flex;
    gap: 10px;
  }

  &__group-name {
    text-overflow: ellipsis;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  &__delete {
    cursor: pointer;
  }
}
.icon {
  width: 24px;
  height: 24px;
}
</style>
