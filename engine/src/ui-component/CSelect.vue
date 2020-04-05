<template>
  <el-select v-bind="$attrs" @input="handleInput">
    <el-option v-for="(item,index) in list" :key="index" :label="item.label"
               :value="item.value"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'CSelect',
  inheritAttrs: false,
  props: {
    list: Array,
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e);
    },
  },
};
</script>

<style scoped>

</style>
