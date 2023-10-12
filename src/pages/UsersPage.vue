<template>
  <Navigation />
  <Users />
</template>

<script>
import Users from '../components/Users.vue';
import Navigation from '../components/Navigation.vue';
export default {
  components: {
    Users,
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
