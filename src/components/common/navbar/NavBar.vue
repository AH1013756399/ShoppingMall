<template>
  <div class="nav-bar"> 
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 1.18rem;
    line-height: 1.18rem;
    text-align: center;
  }

  .left,.right {
    width: 1.1rem;
  }
  .center {
    flex: 1;
  }
</style>