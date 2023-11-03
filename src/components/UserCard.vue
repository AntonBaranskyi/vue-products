<template>
  <div class="user">
    <div class="user__photo">
      <img
        v-if="user.avatarUrl"
        :src="`https://vue-products-server.onrender.com/${user.avatarUrl}`"
        alt="photo"
        class="user__photo-item"
      />

      <img
        v-else
        src="../assets/default.png"
        alt="photo"
        class="user__photo-item"
      />
    </div>
    <p class="user__name">{{ user.fullName }}</p>
    <div class="user__email">
      <i class="far fa-envelope"></i>
      <a :href="'mailto:' + user.email">{{ user.email }}</a>
    </div>
    <div class="user__message">
      <img class="icon" src="../assets/icons/message.png" alt="message" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  .user__photo {
    margin-right: 20px;
    .user__photo-item {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: contain;
    }
  }
  .user__name {
    font-size: 24px;
    margin: 0;
  }
  .user__email {
    display: flex;
    align-items: center;
    margin-top: 10px;
    i {
      font-size: 18px;
      color: #007bff;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      font-size: 16px;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .user__message {
    cursor: pointer;
  }
}

.icon {
  width: 28px;
  height: 28px;
}
/* .user {
  display: flex;
  background-color: #fff;

  align-items: center;

  height: 150px;

  padding-inline: 20px;

  border-radius: 10px;

  &__photo {
    &-item {
      padding: 5px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid black;

      height: 90px;
      width: 90px;
    }
  }
} */
</style>
