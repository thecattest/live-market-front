<!-- eslint-disable prettier/prettier, max-len -->
<template>
  <li class="product">
    <img
      :src="product.image"
      alt=""
      class="product__image"
    />
    <h3>{{ product.name }}</h3>
    <span>{{ product.price }}</span>
    <input type="checkbox" />
  </li>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="less">
  .product {
    display: grid;
    grid-column: 20px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;

    &__image {
      width: 300px;
    }

    h3 {
      margin-bottom: 30px;
    }

    span {
      font-size: 34px;
    }
  }
</style>
