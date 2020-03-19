<template>
  <el-table v-bind="$attrs"></el-table>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CTable',
  props: {
    Pagination: Object,
  },
};
</script>

<style>
</style>
