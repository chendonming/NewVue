<template>
  <div class="home">
    <div class="tool">
      <el-button>预览</el-button>
      <el-button>生成</el-button>
    </div>
    <component-select/>
    <component-wrapper/>
    <component-attribute/>
  </div>
</template>

<script>
import ComponentSelectVue from '../components/ComponentSelect.vue';
import ComponentWrapperVue from '../components/ComponentWrapper.vue';
import ComponentAttributeVue from '../components/ComponentAttribute.vue';

export default {
  name: 'Home',
  components: {
    ComponentSelect: ComponentSelectVue,
    ComponentWrapper: ComponentWrapperVue,
    ComponentAttribute: ComponentAttributeVue,
  },
  created() {
    const myNotification = new Notification('标题', {
      body: '通知正文内容',
    });

    myNotification.onclick = () => {
      console.log('通知被点击');
    };
  },
};
</script>

<style lang="less" scoped>
  .tool {
    position        : absolute;
    top             : 36px;
    height          : 64px;
    display         : flex;
    align-items     : center;
    justify-content : center;
    width           : 100%;
  }
</style>
