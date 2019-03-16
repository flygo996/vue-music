<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="(item,index) in topList" :key="index">
          <div class="icon">
            <img v-lazy="item.picUrl">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.songList" :key="index">
              <span>{{index + 1}}、</span>
              <span>{{song.songname}} -- {{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { getTopList } from '@/api/rank'
import { ERR_OK } from '@/api/config'
import { playlistMixin } from '@/utils/mixin'
import { mapMutations } from 'vuex'
export default {
  name: 'rank',
  mixins: [playlistMixin],
  created() {
    this._getTopList()
  },
  data() {
    return {
      topList: []
    }
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''

      this.$refs.rank.style.bottom = bottom
      this.$refs.toplist.refresh()
    },
    selectItem(item) {
      this.$router.push({
        path: `/rank/${item.id}`
      })
      this.setTopList(item)
    },
    _getTopList() {
      getTopList().then((res) => {
        if (res.code === ERR_OK) {
          this.topList = res.data.topList.sort((a, b) => b.listenCount - a.listenCount)
        }
      })
    },
    ...mapMutations({
      setTopList: 'SET_TOP_LIST'
    })
  },
  watch: {
    topList() {
      setTimeout(() => {
        this.$Lazyload.lazyLoadHandler()
      }, 20)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/variable";
@import "~@/scss/mixin";

.rank {
  position: fixed;
  width: 100%;
  top: 88px * 2;
  bottom: 0;
  .toplist {
    height: 100%;
    overflow: hidden;
    .item {
      $width: 200px;
      display: flex;
      margin: 0 20px;
      padding-top: 20px;
      height: $width;
      &:last-child {
        padding-bottom: 20px;
      }
      .icon {
        flex: 0 0 $width;
        width: $width;
        height: $width;
        img {
          width: $width;
          height: $width;
        }
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: $width;
        overflow: hidden;
        background: $color-highlight-background;
        color: $color-text-d;
        font-size: $font-size-small;
        .song {
          @include no-wrap();
          line-height: 26px * 2;
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
