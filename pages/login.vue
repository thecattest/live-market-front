<!-- eslint-disable prettier/prettier, max-len -->
<template>
  <div class="mask-auth">
    <div class="container">
      <form
        class="auth"
        action="http://92.53.124.98:7007/login"
        method="post"
      >
        <div class="auth__login">
          <label for="login"></label>
          <input
            id="login"
            name="login"
            placeholder="login"
            type="text"
          />
        </div>
        <div class="auth__password">
          <label for="password"></label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
        </div>
        <button
          class="auth__button"
          @submit.stop.prevent=""
        >
          Log in
        </button>
      </form>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script>
  export default {
    layout: 'empty',
  };
</script>

<style lang="less">
  .mask-auth {
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .auth {
    font-family: 'montserrat';
    font-size: 20px;
    display: grid;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    margin: 200px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: -16px -16px #989898, 16px 16px #6c6666;

    input {
      padding: 15px 25px;
      border-radius: 15px;
      border: 3px solid rgba(0, 0, 0, 0.5);

      &:active {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }

      &:hover {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }

      &:focus {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }
    }

    &__button {
      background-color: transparent;
      padding: 15px 15px;
      border-radius: 15px;
      border: 3px solid rgba(0, 0, 0, 1);

      &:active {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }

      &:hover {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }

      &:focus {
        border: 3px solid rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
