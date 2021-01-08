<template>
  <nav
    class="navbar sticky-top bg-transparent navbar-light bg-light p-2 justify-content-center"
  >
    <span> <span class="vue-text">Vue</span>rld</span>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
  font-size: 60px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  &.vue-text {
    color: #00c180;
  }
}
.bg-transparent {
  backdrop-filter: blur(5px);

}
</style>
