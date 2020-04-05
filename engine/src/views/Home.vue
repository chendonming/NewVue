<template>
  <div class="home">
    <div class="tool">
      <el-button>预览</el-button>
      <el-button>生成</el-button>
      <el-button @click="visible = true">显示</el-button>
    </div>
    <component-select />
    <component-wrapper />
    <component-attribute />
    <c-popup :visible.sync="visible" title="标题说是说" :draggable="true">
      <c-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称" prop="name" required email mobile>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region" required>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="1"></el-option>
            <el-option label="区域二" value="2"></el-option>
          </el-select>
        </el-form-item>
      </c-form>
    </c-popup>
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
  data() {
    return {
      visible: false,
      form: {
        name: '',
        region: '',
      },
    };
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
  position: absolute;
  top: 36px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
