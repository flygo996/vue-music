<template>
  <div class="the-player">
    
  </div>
</template>

<script>
export default {
  name: 'the-player',
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
  .the-player{
    color: blue;
  }
</style>
