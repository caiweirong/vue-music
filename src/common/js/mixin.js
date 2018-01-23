import {mapGetters} from 'vuex';

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist);
  },
  activated() {
    this.handlePlaylist(this.playlist);
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal);
    }
  },
  methods: {
    // 组件必需要有定义这个函数
    handlePlaylist(playlist) {
      throw new Error('component must implement handlePlaylist method');
    }
  }
};
