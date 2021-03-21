<!-- eslint-disable prettier/prettier, max-len -->
<template>
  <header
    class="header"
  >
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav">
          <ul class="nav">
            <li class="nav__item">
              <NuxtLink
                to="#"
                class="nav__link"
              >
                DreamTeam
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink
                to="#"
                class="nav__link"
              >
                DreamTeam
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink
                to="#"
                class="nav__link"
              >
                DreamTeam
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink
                to="#"
                class="nav__link"
              >
                DreamTeam
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <a
          href="http://92.53.124.98:7007/logout"
          class="header__auth"
        >
          Log out
        </a>
      </div>
    </div>
  </header>
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
  .header {
    background-color: rgba(48, 48, 48, 1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      column-gap: 30px;
      align-items: center;
    }

    &__logo {
      grid-column: 1/2;
    }

    &__nav {
      grid-column: 2/7;
      padding: 10px;
    }

    &__auth {
      grid-column: 7/9;
      padding: 10px;
      color: rgba(255, 255, 255, 0.7);
      margin: 10;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  .nav {
    display: grid;
    grid-auto-flow: column;
    column-gap: 30px;

    &__item {
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
