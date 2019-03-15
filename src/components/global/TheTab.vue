<template>
  <div class="the-tab"></div>
</template>
<script>
export default {
  name: 'the-tab',
  props: {
    name: {
      type: String,
      default: 'laifeipeng'
    },
    test: {
      type: String | Array,
      required: true
    },
  },
  data() {
    return {
      show: false
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.the-tab {
  color: blue;
}
</style>
