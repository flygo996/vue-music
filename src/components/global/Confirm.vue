<template>
  <div class="confirm">
    
  </div>
</template>

<script>
export default {
  name: 'confirm',
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
  .confirm{
    color: blue;
  }
</style>
