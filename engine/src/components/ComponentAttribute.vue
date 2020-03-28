<template>
  <div class="wrapper">
    <el-form>
      <template v-for="(item, index) in this.getattr">
        <div :key="index">
          <template v-if="index !== 'value'">
            <el-form-item :label="item.desc">
              <template v-if="item.type === 'string'">
                <el-input v-model="item.default"/>
              </template>
              <template v-if="item.type === 'bool'">
                <el-select v-model="item.default">
                  <el-option :value="1" label="是"></el-option>
                  <el-option :value="0" label="否"></el-option>
                </el-select>
              </template>
            </el-form-item>
          </template>
        </div>
      </template>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ComponentAttribute',
  computed: {
    ...mapGetters(['getattr']),
  },
};
</script>

<style lang="less" scoped>
  .wrapper {
    position: absolute;
    right: 10px;
    top: 100px;
    height: calc(100vh - 200px);
    width: 300px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #4cb6ee;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
