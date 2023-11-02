<template>
  <div class="filters">
    <div class="filters__wrapper">
      <span>Order</span>
      <select
        v-model="chosenOrder"
        class="form-select filters__item"
        @change="onChosenOrderChange"
        aria-label="Default select example"
      >
        <option value="" selected>Choose order</option>
        <option v-for="title in orderTitles" :key="title">{{ title }}</option>
      </select>
    </div>

    <div class="filters__wrapper">
      <input
        class="input input-md"
        type="search"
        placeholder="Write product to find"
        v-model="searchQuery"
        @input="onSearchQueryChange"
      />
      <img
        src="../assets/icons/search.png"
        alt="search"
        class="icon icon-search icon-sm"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {
      chosenOrder: '',
      searchQuery: '',
    };
  },
  computed: {
    ...mapState('orders', {
      orders: (state) => state.orders,
    }),
    orderTitles() {
      return this.countOrderTitle();
    },
  },

  methods: {
    ...mapMutations({
      setSearchQuery: 'products/setSearchQuery',
      setSelectedSort: 'products/setSelectedSort',
    }),
    ...mapActions({
      onGetOrders: 'orders/onGetOrders',
      onChangeSortQuery: 'products/onChangeSortQuery',
      onChangeSearchQuery: 'products/onChangeSearchQuery',
    }),
    countOrderTitle() {
      return this.orders.map((order) => order.title);
    },

    onChosenOrderChange() {
      this.onChangeSortQuery(this.chosenOrder);
    },

    onSearchQueryChange() {
      this.onChangeSearchQuery(this.searchQuery);
    },
  },

  created() {
    this.onGetOrders();
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/input.scss';
@import '../styles/icon.scss';
.filters {
  display: flex;

  gap: 35px;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__item {
    &::before {
      content: 'Тип';
    }
  }
}
</style>
