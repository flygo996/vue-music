<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="sliderArr.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item,index) in sliderArr" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单</h1>
          <ul>
            <li
              @click="selectItem(item)"
              v-for="(item,index) in discList"
              :key="index"
              class="item"
            >
              <!-- 这里先跳转到URL，后期跳转到自己的路由 -->
              <a :href="item.id | idToUrl">
                <div class="icon">
                  <img v-lazy="item.picUrl">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.songListAuthor"></h2>
                  <p class="desc" v-html="item.songListDesc"></p>
                  <h1>
                    <svg-icon icon-class="headphones"></svg-icon>
                    {{item.accessnum | bigNumFormat}}
                  </h1>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { getRecommend } from '@/api/recommend'
import { playlistMixin } from '@/utils/mixin'
import { ERR_OK } from '@/api/config'
import { mapMutations } from 'vuex'

export default {
  name: 'recommend',
  mixins: [playlistMixin],
  filters: {
    idToUrl(id) {
      return `https://y.qq.com/n/m/detail/taoge/index.html?ADTAG=myqq&from=myqq&channel=10007100&id=${id}`
    }
  },
  data() {
    return {
      sliderArr: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
  },
  activated() {
    setTimeout(() => {
      this.$refs.slider && this.$refs.slider.refresh()
    }, 20)
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''

      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    },
    selectItem(item) {
      // this.$router.push({
      //   path: `/recommend/${item.dissid}`
      // })
      // this.setDisc(item)
    },
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderArr = res.data.slider
          // this.discList = res.data.songList
          this.discList = res.data.songList.sort((a, b) => b.accessnum - a.accessnum)
        }
      })
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/variable";

.recommend {
  position: fixed;
  width: 100%;
  top: 88px * 2;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 88px;
        line-height: 88px * 1.2;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        background-color: rgba(0, 0, 0, 0.3);
        margin: 0 20px 30px 20px;
        a {
          display: block;
          height: 100%;
          width: 100%;
          display: flex;
          box-sizing: border-box;
          align-items: center;
        }
        .icon {
          $width: 300px;
          position: relative;
          flex: 0 0 $width;
          width: $width;
          img {
            width: $width;
            height: $width;
          }
          .svg-icon {
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-size: 60px;
            fill: $color-theme-d;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 20px;
          flex: 1;
          // line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
