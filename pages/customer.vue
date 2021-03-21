<!-- eslint-disable prettier/prettier, max-len -->
<template>
  <div class="customer">
    <div class="container">
      <ul class="products">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: {},
      };
    },
    mounted() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        import(`~/products.js`).then((data) => {
          this.products = data;
        });
      },
    },
  };
</script>

<style lang="less">
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .customer {
    padding: 100px 0;
  }
</style>
