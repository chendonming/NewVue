<template>
  <div class="wrapper">
    <el-form>
      <template v-for="(item, index) in this.getattr">
        <div :key="index">
          <template v-if="index !== 'value'">
            <el-form-item :label="item.desc">
              <template v-if="item.type === 'string'">
                <el-input :value="item.default" @input="handleInput(index, $event)"/>
              </template>
              <template v-else-if="item.type === 'bool'">
                <el-select :value="item.default" @input="handleInput(index, $event)">
                  <el-option value="1" label="是"></el-option>
                  <el-option value="0" label="否"></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'arrayOfType'">
                <el-select :value="item.default" @input="handleInput(index, $event)">
                  <el-option v-for="(item,index) in item.list"
                             :key="index" :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </template>
              <!--动态数组-->
              <template v-else-if="item.type === 'dynamicArray'">
                <ul>
                  <li v-for="(item, index) in item.default" :key="index">
                    label: {{item.label}} value: {{item.value}}
                  </li>
                </ul>
                <el-button size="mini">添加</el-button>
              </template>
            </el-form-item>
          </template>
        </div>
      </template>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ComponentAttribute',
  computed: {
    ...mapGetters(['getattr', 'getIndex']),
  },
  methods: {
    handleInput(index, e) {
      const flag = ['0', '1'].indexOf(e) !== -1 ? e !== '0' : e;
      this.setAttributeByIndex({
        index,
        info: flag,
      });
      this.setList({
        index: this.getIndex,
        info: flag,
        key: index,
      });
    },
    ...mapMutations(['setAttributeByIndex', 'setList']),
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
