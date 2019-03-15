<template>
  <div class="about">
    <h1>This is an about page</h1>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-24gl-arrowLeftBack"></use>
    </svg>
    <hr>
    <svg-icon class-name="test" icon-class="arrowLeftBack"></svg-icon>
  </div>
</template>
<script>
import SvgIcon from '@/components/global/SvgIcon.vue'
export default {
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: red;
  fill: rgba(0, 0, 0, 0.5);
  font-size: 2rem;
}
.test {
  fill: #f3f;
  color: blue;
  font-size: 2rem;
}
</style>
