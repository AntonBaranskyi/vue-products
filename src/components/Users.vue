<template>
  <div class="users">
    <div class="container">
      <h1 class="users__title">List of Users</h1>
    </div>

    <div class="users__container">
      <div
        v-if="usersLoading"
        class="d-flex justify-content-center align-items-center"
      >
        <div class="spinner-border" role="status"></div>
      </div>

      <UserCard v-else :user="user" :key="user._id" v-for="user in users" />
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';
import { mapState, mapActions } from 'vuex';

import Spinner from './Spinner.vue';

export default {
  methods: {
    ...mapActions({
      onGetUsers: 'users/onGetUsers',
    }),
  },
  computed: {
    ...mapState('users', {
      users: (state) => state.users,
      usersLoading: (state) => state.usersLoading,
    }),
  },

  mounted() {
    this.onGetUsers();
  },

  components: { UserCard },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding-top: 40px;
  margin-bottom: 50px;
}

.users {
  grid-column: 3/13;

  &__container {
    display: flex;
    flex-direction: column;

    gap: 25px;
    padding-inline: 25px;
  }
}
</style>
