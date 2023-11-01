<template>
  <div class="wrapper">
    <div class="container wrapper__container">
      <div class="wrapper__div">
        <h2 class="wrapper__title">Log In</h2>

        <form class="wrapper__form">
          <div class="wrapper__input-wrapper">
            <p>Email:</p>
            <input
              v-model="email"
              placeholder="Please write your email"
              class="wrapper__input input"
              type="email"
            />
          </div>

          <div class="wrapper__input-wrapper">
            <p>Password:</p>
            <input
              v-model="password"
              placeholder="Please write your password"
              class="wrapper__input input"
              type="password"
            />
          </div>

          <button
            @click.prevent="sendLoading"
            type="submit"
            class="wrapper__submit"
          >
            Log In
          </button>
        </form>

        <RouterLink to="signUp" type="submit" class="wrapper__register">
          Sign Up
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { watchEffect } from 'vue';

import { toast } from 'vue3-toastify';
import router from '../router/router';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginSuccess: false,
    };
  },

  computed: {
    ...mapState('auth', {
      isAuth: (state) => state.isAuth,
      logginError: (state) => state.logginError,
    }),
  },

  // setup() {
  //   const isAuth = ref(false);
  //   // Використовуйте watchEffect для реакції на зміни isAuth
  //   watchEffect(() => {
  //     if (isAuth) {
  //       router.push('/main');
  //     }
  //   });
  // },
  methods: {
    ...mapActions({
      onSendLogin: 'auth/onSendLogin',
    }),
    sendLoading() {
      const objToSend = {
        email: this.email,
        password: this.password,
      };

      this.onSendLogin(objToSend);

      this.email = '';
      this.password = '';
    },
  },

  watch: {
    isAuth(newValue) {
      if (newValue) {
        toast.success('Loggin was successful', {
          autoClose: 1000,
          onClose: () => {
            this.$router.push('/main');
          },
        });
      }
    },
    logginError(newValue) {
      if (newValue) {
        toast.error('Invalid login or password', {
          autoClose: 1000,
        });
      }
    },
    loginSuccess(newValue) {
      if (newValue) {
        this.$router.push('/main');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/auth.scss';
@import '../styles/input.scss';
</style>
