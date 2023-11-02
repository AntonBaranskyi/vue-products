<template>
  <div
    class="modal backdrop"
    id="exampleModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="productAddModal"
  >
    <div class="modal-dialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body flex">
          <div class="wrapper">
            Title
            <input
              type="text"
              placeholder="Write product title "
              class="input"
              v-model="productTitle"
              maxlength="25"
            />
          </div>

          <div class="wrapper">
            Price ($)
            <input
              type="number"
              v-model="productPrice"
              min="0"
              max="5000"
              placeholder="Choose product price "
              class="input"
            />
          </div>

          <div class="wrapper">
            Status
            <select
              v-model="productStatus"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="" disabled selected>Choose status</option>
              <option value="1">Free</option>
              <option value="2">Engaged</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="onSubmitModal" type="button" class="btn btn-primary">
            Add product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      productTitle: '',
      productPrice: 0,
      productStatus: '',
    };
  },
  props: {
    productAddModal: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState('orders', {
      orderActive: (state) => state.orderActive,
    }),

    ...mapState('products', {
      addedProduct: (state) => state.addedProduct,
    }),

    ...mapState({
      userData: (state) => state.auth.userData,
    }),
  },

  methods: {
    ...mapActions({
      onAddProduct: 'products/onAddProduct',
    }),

    ...mapActions({
      onAddActiveProducts: 'orders/onAddActiveProducts',
    }),
    closeModal() {
      this.$emit('update:productAddModal', false);
    },

    onResetForm() {
      this.productTitle = '';
      this.productPrice = 0;
      this.productStatus = '';
    },

    async onSubmitModal() {
      const objToSend = {
        title: this.productTitle,
        isNew: this.productStatus === '1' ? true : false,
        price: {
          value: this.productPrice,
        },
        order: this.orderActive.id,
        userId: this.userData._id,
      };

      const addedProduct = await this.onAddProduct(objToSend);

      console.log(addedProduct);

      this.onAddActiveProducts(addedProduct);
      this.onResetForm();
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
@import '../styles/backdrop.scss';
@import '../styles/input.scss';
</style>
