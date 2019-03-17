<template>
  <div class="search-box">
    <svg-icon icon-class="search2" class-name="icon-search"></svg-icon>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder">
    <svg-icon @click="clear" v-show="query" icon-class="errorCircle" class-name="icon-errorCircle"></svg-icon>
  </div>
</template>

<script>
import { debounce } from '@/utils/util'

export default {
  name: 'search-box',
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    clear() {
      this.query = ''
    },
    setQuery(query) {
      this.query = query
    },
    blur() {
      this.$refs.query.blur()
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 200))
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/variable";

.search-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 12px;
  height: 80px;
  background: $color-highlight-background;
  border-radius: 12px;

  .icon-search {
    font-size: 40px;
    fill: $color-background;
  }

  .box {
    flex: 1;
    margin: 0 10px;
    line-height: 36px;
    background: $color-highlight-background;
    color: $color-text;
    font-size: $font-size-medium;
    outline: 0;

    &::placeholder {
      color: $color-text-d;
    }

    .icon-errorCircle {
      font-size: 32px;
      fill: $color-background;
    }
  }
}
</style>
