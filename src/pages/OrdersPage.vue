<template>
  <Navigation />
  <Orders />
</template>

<script>
import Orders from '../components/Orders.vue';
import Navigation from '../components/Navigation.vue';
export default {
  components: {
    Orders,
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
