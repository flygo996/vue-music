<template>
  <div class="yaya">
    
  </div>
</template>

<script>
export default {
  name: 'yaya',
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
  .yaya{
    color: blue;
  }
</style>
