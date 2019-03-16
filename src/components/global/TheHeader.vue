<template>
  <div class="the-header">
    <div class="icon"></div>
    <h1 class="text">Lypeng Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <svg-icon class-name="user" icon-class="user"></svg-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'the-header',
}
</script>

<style lang="scss" scoped>
@import "~@/scss/variable";
@import "~@/scss/mixin";

.the-header {
  position: relative;
  height: 88px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 20px;
    width: 46px;
    height: 46px;
    margin-right: 18px;
    background-image: url('../../assets/logo.png');
    background-size: 46px 46px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 88px;
    font-size: $font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .user {
      display: block;
      padding: 12px;
      font-size: 40px;
      color: $color-theme;
    }
  }
}
</style>
