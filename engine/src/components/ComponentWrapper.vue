<template>
  <div class="wrapper">

  </div>
</template>

<script>
/**
 * 组件盛放容器
 */
export default {
  name: 'ComponentWrapper',
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  left: 330px;
  top: 100px;
  width: calc(100vw - 600px - 40px - 20px);
  height: calc(100vh - 200px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
