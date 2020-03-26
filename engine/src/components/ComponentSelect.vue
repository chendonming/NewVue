<template>
  <div class="wrapper">
    <draggable :list="componentJson" :group="{ name: 'component', pull: 'clone', put: false }">
      <div class="item" v-for="(item,index) in componentJson" :key="index">{{item.desc}}</div>
    </draggable>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
import draggable from 'vuedraggable';

export default {
  name: 'ComponentSelect',
  components: {
    draggable,
  },
  data() {
    return {
      componentJson: [],
    };
  },
  created() {
    // 读取文件信息
    ipcRenderer.send('query-component');
    ipcRenderer.on('query-component-reply', (event, json) => {
      if (this.isArray(json)) {
        this.componentJson = json;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  left: 10px;
  top: 100px;
  height: calc(100vh - 200px);
  width: 300px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #4cb6ee;

  .item {
    display: flex;
    margin: 10px;
    border: 1px dashed transparent;
    cursor: move;
    padding: 10px;

    &:hover {
      border: 1px dashed #409eff;
    }
  }
}
</style>
