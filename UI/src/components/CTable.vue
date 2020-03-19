<template>
  <div>
    <el-table v-bind="$attrs">
      <el-table-column
        v-for="(column, index) in columns"
        :label="column.label"
        :prop="column.prop"
        :key="index"
        :width="column.width"
      >
        <template #default="scope">
          <table-render v-if="column.render"
            :row="scope.row"
            :render="column.render"></table-render>
          <span v-else>{{scope.row[column.prop]}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-bind="Pagination" v-if="Pagination"></el-pagination>
  </div>
</template>

<script>
import TableRender from './base/TableRender';

export default {
  inheritAttrs: false,
  name: 'CTable',
  components: { TableRender },
  props: {
    Pagination: Object,
    columns: Array,
  },
};
</script>

<style>
</style>
