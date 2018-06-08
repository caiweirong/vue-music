<!-- 正在载入组件 -->
<template>
  <div class="loading">
    <img src="./loading.gif" height="21" width="24" />
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '正在载入'
      };
    }
  };
</script>

<style scoped lang="less">
  @import "../../common/less/variable.less";

  .loading{
    width: 100%;
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: @font-size-small;
      color: @color-text-l;
    }
  }

</style>
