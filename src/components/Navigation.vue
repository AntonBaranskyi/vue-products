<template>
  <div class="sidebar shadow-sm">
    {{ this.$store.auth }}
    <div class="sidebar__profile sidebar__profile-margin">
      <img
        v-if="userData?.avatarUrl"
        :src="`https://vue-products-server.onrender.com${userData.avatarUrl}`"
        alt="photo"
        class="user__photo-item"
      />

      <img
        v-else
        src="../assets/default.png"
        alt="photo"
        class="user__photo-item"
      />

      <img
        class="icon"
        src="../assets/icons/logout.png"
        alt="settings"
        @click="handleLogout"
      />
    </div>

    <nav class="nav">
      <ul class="nav__list">
        <li v-for="nav in navArray" :key="nav.path">
          <RouterLink active-class="active" :to="nav.path" class="nav__link">
            {{ nav.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import router from '../router/router';
import { navArray } from '../utils/NavHelper';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      navArray,
    };
  },

  methods: {
    ...mapActions({
      onLogout: 'auth/onLogout',
    }),

    handleLogout() {
      const answ = window.confirm('Are you sure you want to logout');

      if (answ) {
        this.onLogout();

        router.push('/');
      }
    },
  },

  computed: {
    ...mapState('auth', {
      userData: (state) => state.userData,
    }),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  grid-column: 1/3;
  position: relative;
  left: 0;
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-inline: 25px;

  background-color: #fff;
  &__profile {
    &-margin {
      position: relative;
      margin-bottom: 50px;

      padding: 15px;
    }
    &-image {
    }
  }
}

.user__photo-item {
  width: 150px;
  height: 150px;

  opacity: 0.6;

  object-fit: cover;
}

.nav {
  &__list {
    display: flex;
    flex-direction: column;

    gap: 15px;
  }

  &__link {
    cursor: pointer;
    text-transform: uppercase;
    height: 52px;
  }
}

.icon {
  position: absolute;

  cursor: pointer;
  top: 78%;
  right: 18%;
  width: 28px;
  height: 28px;
}

.active {
  color: pink;
}
</style>
