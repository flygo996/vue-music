<template>
  <div class="the-header">
    
  </div>
</template>

<script>
export default {
  name: 'the-header',
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
  .the-header{
    color: blue;
  }
</style>
