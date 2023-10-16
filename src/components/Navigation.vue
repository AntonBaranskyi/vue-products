<template>
  <div class="sidebar shadow-sm">
    {{ this.$store.auth }}
    <div class="sidebar__profile sidebar__profile-margin">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        class="sidebar__profile-image rounded-circle"
        style="width: 150px"
        alt="Avatar"
      />

      <img class="icon" src="../assets/icons/settings.png" alt="settings" />
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
import { navArray } from '../utils/NavHelper';
export default {
  data() {
    return {
      navArray,
    };
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
  top: 82%;
  right: 18%;
  width: 28px;
  height: 28px;
}

.active {
  color: pink;
}
</style>
