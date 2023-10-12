<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header />
  <div class="main grid">
    <RouterView />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  column-gap: 12px;
  grid-template-columns: repeat(12, 1fr);
}

.main {
  grid-column: 3/13;

  background-color: #f0f3f5;
}
</style>
