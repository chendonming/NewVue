<template>
  <div>
    <el-button @click="visible = true">点击</el-button>
    <popup
      :visible.sync="visible"
      title="标题说是说"
      :draggable="true"
      @submit="submit"
    >
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
    </popup>
  </div>
</template>

<script>
import popup from '@/components/base/CPopup';
import CForm from '@/components/CForm';


export default {
  components: { popup, CForm },
  data() {
    return {
      visible: false,
      form: {
        name: '',
        region: '',
      },
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('校验成功');
        }
      });
    },
  },
};
</script>

<style>
</style>
