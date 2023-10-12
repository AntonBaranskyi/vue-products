<template>
  <div class="users">
    <div class="container">
      <h1 class="users__title">List of Users</h1>
    </div>

    <div class="users__container">
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue';

export default { components: { UserCard } };
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding-top: 40px;
  margin-bottom: 50px;
}

.users {
  &__container {
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding-inline: 25px;
  }
}
</style>
