<template>
  <div class="sidebar">
    <div class="sidebar__profile sidebar__profile-margin">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        class="sidebar__profile-image rounded-circle"
        style="width: 150px"
        alt="Avatar"
      />

      <img class="icon" src="../assets/icons/settings.png" alt="" />
    </div>

    <nav class="nav">
      <ul class="nav__list">
        <li><a class="nav__link" href="#">Приходи</a></li>
        <li><a class="nav__link" href="#">Products</a></li>
        <li><a class="nav__link" href="#">Users</a></li>
        <li><a class="nav__link" href="#">Setings</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
</style>
