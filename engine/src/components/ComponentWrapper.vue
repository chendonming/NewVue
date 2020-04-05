<template>
  <div class="wrapper">
    <draggable :list="wrapperlist" group="component" @change="log">
      <component v-for="(item,index) in getList"
                 :key="index" :is="item.component"
                 :value="item.prop.value" @input="handleInput(index, $event)"
                 v-bind="item.prop">
      </component>
    </draggable>
  </div>
</template>

<script>
/**
   * 组件盛放容器
   */
import draggable from 'vuedraggable';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'ComponentWrapper',
  components: {
    draggable,
  },
  data() {
    return {
      wrapperlist: [],
    };
  },
  computed: {
    ...mapGetters(['getList']),
  },
  methods: {
    log(e) {
      // 指定操作对象下标
      this.setIndex(e.added.newIndex);
      this.setattribute(e.added.element.props); // 赋值给右侧的属性列表
      this.setAllList(this.wrapperlist); // 赋值列表
    },
    handleInput(index, e) {
      this.setList({
        index,
        info: e,
      });
    },
    ...mapMutations(['setattribute', 'setAllList', 'setList', 'setIndex']),
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
