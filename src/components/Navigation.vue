<template>
  <div class="navbar">
    <h2 class="potato-logo">🥔 Potato</h2>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/">File</router-link>
    <router-link class="nav-link" to="/">Edit</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss" scoped>
.navbar {
  color: var(--blue-300);
  background: var(--blue-900);
  display: flex;
  align-items: center;

  .potato-logo {
    color: var(--white);
    height: 100%;
    padding: 0 15px;
    margin: 0 30px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link {
    color: var(--blue-100);
    height: 100%;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.1s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;


    &:hover {
      background: var(--blue-800);
    }
  }
}
</style>