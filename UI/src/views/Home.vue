<template>
  <div>
    <el-button @click="visible = true">点击</el-button>
    <c-table :data="data"
      :columns="columns"
      :Pagination="{layout:'prev, pager, next', total: 50}"/>
    <c-popup
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
    </c-popup>
  </div>
</template>

<script>
// import popup from '@/components/base/CPopup';
// import CForm from '@/components/CForm';
// import CTable from '@/components/CTable';

import { CPopup, CForm, CTable } from 'integration-element-ui';


export default {
  // components: { popup, CForm, CTable },
  components: { CPopup, CForm, CTable },
  data() {
    return {
      visible: false,
      form: {
        name: '',
        region: '',
      },
      columns: [
        {
          label: '名称',
          prop: 'name',
        },
        {
          label: '日期',
          prop: 'date',
        },
        {
          label: '地址',
          prop: 'address',
        },
      ],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
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
