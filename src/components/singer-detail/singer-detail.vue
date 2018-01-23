<!-- 歌手详情界面 -->
<template>
  <transition name="slide">
    <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {getSingerDetail} from 'api/singer';
  import {ERR_OK} from 'api/config';
  import {createSong} from 'common/js/song';
  import MusicList from 'components/music-list/music-list';

  export default {
    data() {
      return {
        songs: []
      };
    },
    computed: {
      title() {
        // this.singer由歌手界面传入数据,指的就是vuex传入的singer
        return this.singer.name;
      },
      bgImage() {
        return this.singer.avatar;
      },
      // vuex
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail();
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer');
          return;
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list);
          }
        });
      },
      _normalizeSongs(list) {
        // 返回值
        let ret = [];
        list.forEach((item) => {
          let {musicData} = item;
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData));
          }
        });
        return ret;
      }
    },
    components: {
      MusicList
    }
  };
</script>

<style lang="less">
  @import "../../common/less/variable.less";

  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
