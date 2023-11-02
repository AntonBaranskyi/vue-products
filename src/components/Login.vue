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
              @blur="validateEmail"
            />
            <p v-if="touched.email && errors.email" class="text text-danger">
              {{ errors.email }}
            </p>
          </div>

          <div class="wrapper__input-wrapper">
            <p>Password:</p>
            <input
              v-model="password"
              placeholder="Please write your password"
              class="wrapper__input input"
              type="password"
              @blur="validatePassword"
            />
            <p
              v-if="touched.password && errors.password"
              class="text text-danger"
            >
              {{ errors.password }}
            </p>
          </div>

          <button
            type="submit"
            class="wrapper__submit"
            @click.prevent="sendLoading"
            :disabled="hasErrors"
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
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      email: '',
      password: '',
      touched: {
        email: false,
        password: false,
      },
      errors: {
        email: '',
        password: '',
      },
    };
  },

  computed: {
    ...mapState('auth', {
      isAuth: (state) => state.isAuth,
      logginError: (state) => state.logginError,
    }),
    hasErrors() {
      return !!(this.errors.email || this.errors.password);
    },
  },

  methods: {
    ...mapActions({
      onSendLogin: 'auth/onSendLogin',
    }),

    async sendLoading() {
      this.validateEmail();
      this.validatePassword();

      if (this.hasErrors) {
        return;
      }

      const objToSend = {
        email: this.email,
        password: this.password,
      };

      const response = await this.onSendLogin(objToSend);

      if (response) {
        localStorage.setItem('token', response.token);
        this.email = '';
        this.password = '';
      }
    },

    validateEmail() {
      this.touched.email = true;
      if (this.email) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.errors.email = emailPattern.test(this.email)
          ? ''
          : 'Invalid email format.';
      } else {
        this.errors.email = 'Email is required.';
      }
    },

    validatePassword() {
      this.touched.password = true;
      this.errors.password = this.password ? '' : 'Password is required.';
    },
  },

  watch: {
    isAuth(newValue) {
      if (newValue) {
        toast.success('Log in was successful', {
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
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/auth.scss';
@import '../styles/input.scss';
</style>
