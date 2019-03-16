<template>
  <div class="disc">
    
  </div>
</template>

<script>
export default {
  name: 'disc',
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
  .disc{
    color: blue;
  }
</style>
