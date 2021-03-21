<!-- eslint-disable prettier/prettier, max-len -->
<template>
  <footer
    class="footer"
  >
  </footer>
</template>
<!-- eslint-enable -->

<script>
  import Vue from 'vue';
  import VueScreen from 'vue-screen';

  Vue.use(VueScreen, {
    desktop: '1024px',
  });

  export default {};
</script>

<style lang="less">
  .footer {
    background-color: rgba(48, 48, 48, 1);

    height: 45px;
  }
</style>
