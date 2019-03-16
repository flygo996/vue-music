<template>
  <div class="top-list">
    
  </div>
</template>

<script>
export default {
  name: 'top-list',
  props: {
    name: {
      type: String,
      default: 'laifeipeng'
    },
    // test: {
    //   type: String | Array,
    //   required: true
    // },
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
  .top-list{
    color: blue;
  }
</style>
