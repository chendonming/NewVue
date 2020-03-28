<template>
  <div class="wrapper">
    <draggable :list="list" group="component" @change="log">
      <component v-for="(item,index) in list"
                 :key="index" :is="item.component"
                 v-model="item.prop.value" v-bind="item.prop"></component>
    </draggable>
  </div>
</template>

<script>
/**
   * 组件盛放容器
   */
import draggable from 'vuedraggable';
import { mapMutations } from 'vuex';

export default {
  name: 'ComponentWrapper',
  components: {
    draggable,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    log(e) {
      console.log(this.list);
      this.setattribute(e.added.element.props);
    },
    ...mapMutations(['setattribute']),
  },
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
    border: 1px solid #4cb6ee;
    > div:nth-child(1) {
      height: 100%;
      padding: 10px;
    }
  }
</style>
