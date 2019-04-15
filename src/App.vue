<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
  .scrollbar-wrapper{
    .el-scrollbar__view{
      height: 100%;
    }
    .el-menu {
      height: 100%;
    }
  }
</style>
