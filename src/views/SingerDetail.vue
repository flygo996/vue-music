<template>
  <div class="singer-detail">
    
  </div>
</template>

<script>
export default {
  name: 'singer-detail',
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
  .singer-detail{
    color: blue;
  }
</style>
