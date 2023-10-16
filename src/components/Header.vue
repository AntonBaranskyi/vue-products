<template>
  <header class="header shadow-sm">
    <div class="container header__container">
      <div @click="$router.push('/')" class="header__logo">
        <img class="header__logo-item" src="../assets/logo.png" alt="Logo" />
        <h2 class="header__logo-title text-success">Inventory</h2>
      </div>

      <div class="header__info">
        <div class="header__info-date">
          <p>{{ getDate(new Date()) }}</p>
          <span>12 MAR,2017</span>
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
    </div>
  </header>
</template>

<script>
export default {
  created() {
    this.updateTimeState();

    setInterval(this.updateTimeState, 60000);
  },
  data() {
    return {
      count: 0,
      currentTime: this.getCurrentTime(),
    };
  },

  methods: {
    getDate(date) {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const dayIndex = date.getDay();
      const dayName = daysOfWeek[dayIndex];
      return dayName;
    },

    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    },

    updateTimeState() {
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
}
</style>
