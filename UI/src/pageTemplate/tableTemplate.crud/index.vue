<template>
  <div class="crud_form_template">
    <div class="header">
      <c-form :model="form" :inline="true">
          <el-form-item prop="name" label="姓名">
              <el-input v-model="form.name" size="small"/>
          </el-form-item>
          <el-form-item prop="sex" label="姓名1">
              <el-input v-model="form.sex" size="small"/>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" size="small">确定</el-button>
              <el-button type="default" size="small">清除</el-button>
          </el-form-item>
      </c-form>
    </div>
    <div class="table">
    </div>
  </div>
</template>

<script>
import CForm from '@/components/CForm';

/**
 * CRUD Form Template
 */
export default {
  name: 'tableTemplate',
  components: { CForm },
  data() {
    return {
      form: {
        name: '',
        sex: '',
      },
    };
  },

  methods: {
    search() {},

    clear() {
      this.form = {
        name: '',
        sex: '',
      };
    },
  },
};
</script>

<style lang='less' scoped>
</style>
