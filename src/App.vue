<script>
import { mapActions } from 'vuex';
import SocketioService from './services/socketio.server.js';
import Header from './components/Header.vue';

import { io } from 'socket.io-client';

export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Header,
  },

  methods: {
    ...mapActions({
      onChangeCount: 'users/onChangeCount',
    }),
  },
  created() {
    const soket = io('https://vue-products-server.onrender.com');

    soket.on('userCount', (data) => {
      console.log(data);
      this.onChangeCount(data);
    });
  },
};
</script>

<template>
  <notifications />
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

  height: calc(100vh - 110px);
}
</style>
