<template>
  <div class="wrapper">
    <div class="container wrapper__container">
      <div class="wrapper__div">
        <h2 class="wrapper__title">Sign up</h2>

        <form class="wrapper__form">
          <div class="wrapper__input-wrapper">
            <p>Full name: (*)</p>
            <input
              placeholder="Write your full name"
              class="wrapper__input"
              type="text"
            />
          </div>
          <div class="wrapper__input-wrapper">
            <p>Email: (*)</p>
            <input
              placeholder="Write your email"
              class="wrapper__input"
              type="text"
            />
          </div>

          <div class="wrapper__input-wrapper">
            <p>Password (*)</p>
            <input
              placeholder="Write your password"
              class="wrapper__input"
              type="text"
            />
          </div>

          <div class="mb-3 wrapper__input-wrapper">
            <label for="formFile" class="form-label"
              >Choose your profile image</label
            >
            <input
              class="form-control wrapper__input"
              type="file"
              id="formFile"
            />
          </div>
        </form>

        <button
          @click.prevent="sendSignUp"
          type="submit"
          class="wrapper__submit"
        >
          Register
        </button>

        <RouterLink to="login" type="submit" class="wrapper__register">
          Back to login
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      avatarUrl: '',
    };
  },

  methods: {
    sendSignUp() {
      const objToSend = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        avatarUrl: this.avatarUrl,
      };

      
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/auth.scss';
</style>
