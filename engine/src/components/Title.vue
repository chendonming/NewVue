<template>
  <div class="title">
    <div class="_title">VUE代码前端生产自动化工具 作者chendm</div>
    <div class="tool">
      <div class="iconfont" @click="min">&#xe61c;</div>
      <div class="iconfont" @click="max">&#xe62b;</div>
      <div class="iconfont close" @click="close">&#xe657;</div>
    </div>
  </div>
</template>

<script>
/**
 * 标题栏组件
 */
import { ipcRenderer } from 'electron';

export default {
  name: 'title',
  methods: {
    min() {
      ipcRenderer.send('window-min');
    },
    max() {
      ipcRenderer.send('window-max');
    },
    close() {
      ipcRenderer.send('window-close');
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  height: 36px;
  width: 100%;
  background: #000;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-sizing: border-box;

  >div {
    height: 100%;
    display: flex;
    align-items: center;
  }

  >._title {
    color: #fff;
  }

  .tool {
    display: flex;
    color: #fff;

    .iconfont {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 100%;
      cursor: pointer;
      -webkit-app-region: no-drag;

      &.close:hover {
        background: #F56C6C;
        color: #fff;
      }

      &:hover {
        background: #eee;
        color: #000;
      }
    }
  }
}
</style>
