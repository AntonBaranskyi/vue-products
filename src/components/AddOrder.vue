<template>
  <div
    class="modal backdrop"
    id="exampleModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="orderAddModal"
    @click="closeModal"
  >
    <div class="modal-dialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add order</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <input
            type="text"
            placeholder="Write order name "
            v-model="orderTitle"
          />
        </div>
        <div class="modal-footer">
          <button @click="onSubmitModal" type="button" class="btn btn-primary">
            Add order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      orderTitle: '',
    };
  },
  props: {
    orderAddModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      onAddOrder: 'orders/onAddOrder',
    }),
    closeModal() {
      this.$emit('update:orderAddModal', false);
    },

    onSubmitModal() {
      this.onAddOrder(this.orderTitle);

      this.orderTitle = '';
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
}

input {
  height: 40px;
  border-radius: 8px;
  border: 1px solid gray;
  text-indent: 4px;

  padding: 5px;

  width: 100%;
}
@import '../styles/backdrop.scss';
@import '../styles/auth.scss';
</style>
