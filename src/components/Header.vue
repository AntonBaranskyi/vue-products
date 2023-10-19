<template>
  <header class="header shadow-sm">
    <div class="container header__container">
      <div
        @click="$router.push(`${isAuth ? '/main' : '/'}`)"
        class="header__logo"
      >
        <img class="header__logo-item" src="../assets/logo.png" alt="Logo" />
        <h2 class="header__logo-title text-success">Inventory</h2>
      </div>

      <div class="header__info">
        <div class="header__info-date">
          <p>{{ currentDate }}</p>
          <span>{{ currentFormattedDate }}</span>
        </div>

        <div class="header__info-time">
          <img
            class="header__icon"
            src="../assets/icons/clock.png"
            alt="clock"
          />

          <p class="header__info-current">{{ currentTime }}</p>
        </div>
      </div>
      <div class="header__current-users">USERS ONLINE : {{ userCount }}</div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  created() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 60000);
  },

  data() {
    return {
      count: 0,
      currentDate: this.getCurrentDate(),
      currentFormattedDate: this.getCurrentFormattedDate(),
      currentTime: this.getCurrentTime(),
    };
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      userCount: (state) => state.users.userCount,
    }),
  },
  methods: {
    ...mapActions({
      onChangeCount: 'users/onChangeCount',
    }),

    getCurrentDate() {
      const now = new Date();
      return now.toLocaleDateString(undefined, { weekday: 'long' });
    },

    getCurrentFormattedDate() {
      const now = new Date();
      return now.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    },

    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    },

    updateDateTime() {
      this.currentDate = this.getCurrentDate();
      this.currentFormattedDate = this.getCurrentFormattedDate();
      this.currentTime = this.getCurrentTime();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  grid-column: 1/-1;
  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;

    cursor: pointer;

    padding: 20px 0;
    &-item {
      width: 70px;
      height: 70px;
    }
  }

  &__info {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    &-time {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 8px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__current-user {
    align-items: center;
  }
}
</style>
