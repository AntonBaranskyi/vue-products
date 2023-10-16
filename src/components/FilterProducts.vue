<template>
  <div class="filters">
    <div class="filters__wrapper">
      <span>Тип</span>
      <select
        class="form-select filters__item"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="filters__wrapper">
      <span>Спецификация</span>

      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;

  gap: 35px;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__item {
    &::before {
      content: 'Тип';
    }
  }
}
</style>
