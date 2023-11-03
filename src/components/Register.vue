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
              class="wrapper__input input"
              type="text"
              v-model="fullName"
              @blur="validateFullName"
            />
            <p
              v-if="touched.fullName && errors.fullName"
              class="text text-danger"
            >
              {{ errors.fullName }}
            </p>
          </div>
          <div class="wrapper__input-wrapper">
            <p>Email: (*)</p>
            <input
              placeholder="Write your email"
              class="wrapper__input input"
              type="text"
              v-model="email"
              @blur="validateEmail"
            />
            <p v-if="touched.email && errors.email" class="text text-danger">
              {{ errors.email }}
            </p>
          </div>

          <div class="wrapper__input-wrapper">
            <p>Password (*)</p>
            <input
              placeholder="Write your password"
              class="wrapper__input input"
              type="password"
              v-model="password"
              @blur="validatePassword"
            />
            <p
              v-if="touched.password && errors.password"
              class="text text-danger"
            >
              {{ errors.password }}
            </p>
          </div>

          <div class="mb-3 wrapper__input-wrapper">
            <label for="formFile" class="form-label"
              >Choose your profile image</label
            >
            <input
              class="form-control wrapper__input input"
              type="file"
              id="formFile"
              @change="handleChangeFile"
            />
          </div>
        </form>

        <button
          @click.prevent="sendSignUp"
          type="submit"
          class="wrapper__submit"
          :disabled="hasErrors"
        >
          Register
        </button>

        <RouterLink to="/" type="submit" class="wrapper__register">
          Back to login
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { toast } from 'vue3-toastify';

import router from '../router/router';

import axios from 'axios';

export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      avatarUrl: null,

      touched: {
        fullName: false,
        email: false,
        password: false,
      },

      errors: {
        fullName: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    validateFullName() {
      this.touched.fullName = true;
      this.errors.fullName =
        this.fullName && this.fullName.length >= 3
          ? ''
          : 'Full name is required.';
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

    ...mapActions({
      onSendSignUp: 'auth/onSendSignUp',
    }),

    async sendSignUp() {
      const objToSend = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      };

      if (this.avatarUrl) {
        objToSend.avatarUrl = this.avatarUrl;
      }

      console.log(objToSend);

      const result = await this.onSendSignUp(objToSend);

      console.log(result);
      localStorage.setItem('token', result.token);

      this.fullName = '';
      this.email = '';
      this.password = '';
      this.avatarUrl = '';
    },

    async handleChangeFile(event) {
      try {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('image', file);
        const response = await axios.post(
          'https://vue-products-server.onrender.com/upload',
          // 'http://localhost:8000/upload',
          formData
        );
        this.avatarUrl = response.data.url;
        this.$forceUpdate();
        console.log(this.avatarUrl);
      } catch (error) {
        console.log('Помилка завантаження фото' + error);
      }
    },
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      signUpError: (state) => state.auth.logginError,
    }),

    hasErrors() {
      return !!(
        this.errors.email ||
        this.errors.fullName ||
        this.errors.password
      );
    },
  },

  watch: {
    isAuth(newValue) {
      if (newValue) {
        toast.success('Sign up was successful', {
          autoClose: 1000,
          onClose: () => {
            router.push('/main');
          },
        });
      }
    },

    signUpError(newValue) {
      if (newValue) {
        toast.error('Failed to register', {
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
