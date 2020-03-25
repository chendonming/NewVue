<template>
  <div class="wrapper">
    <div class="item">
      Input 输入框组件
    </div>
    <div class="item">
      Select 选择框组件
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentSelect',
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
