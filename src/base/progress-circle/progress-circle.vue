<!-- mini播放器圆形进度条组件 -->
<template>
  <div class="progress-circle">
    <!-- viewBox与circle半径相对应 -->
    <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <!-- 内圆 r半径 cx cy圆心坐标-->
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent" />
      <!-- 外圆 stroke-dasharray描边 stroke-dashoffset描边偏移-->
      <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"/>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      radius: {
        type: Number,
        default: 100
      },
      percent: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        dashArray: Math.PI * 100
      };
    },
    computed: {
      dashOffset() {
        return (1 - this.percent) * this.dashArray;
      }
    }
  };
</script>

<style lang="less">
  @import "../../common/less/variable.less";

  .progress-circle{
    position: relative;
    circle{
      // 描边的宽度
      stroke-width: 8px;
      transform-origin: center;
      &.progress-background{
        transform: scale(0.9);
        stroke: @color-theme-d;
      }
      &.progress-bar{
        transform: scale(0.9) rotate(-90deg);
        stroke: @color-theme;
      }
    }
  }
</style>
