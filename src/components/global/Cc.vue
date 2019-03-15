<template>
  <div class="cc">
    
  </div>
</template>

<script>
export default {
  name: 'cc',
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
  .cc{
    color: blue;
  }
</style>
