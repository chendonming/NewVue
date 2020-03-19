<template>
  <div>
    <el-form ref="form" v-bind="$attrs" :rules="defaultRules">
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
import validator from '@/common/validator';
/**
 * Basic Form Components
 */
export default {
  inheritAttrs: false,
  props: {
    // Whether the default rule is enabled
    defaultRulesSwitch: {
      type: Boolean,
      default: true,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultRules: {}, // Default configuration made by interception
    };
  },
  created() {
    const arr = this.$slots.default.map((v) => ({
      ...v.componentOptions.propsData,
      ...v.data.attrs,
    }));
    arr.forEach((v) => {
      if (Object.prototype.hasOwnProperty.call(v, 'required')) {
        if (!this.defaultRules[v.prop]) {
          this.$set(this.defaultRules, v.prop, []);
        }
        this.defaultRules[v.prop].push({
          required: true,
          message: `${v.label}${this.$t('canntNull')}`,
          trigger: 'blur',
        });
      }

      if (Object.prototype.hasOwnProperty.call(v, 'mobile')) {
        if (!this.defaultRules[v.prop]) {
          this.$set(this.defaultRules, v.prop, []);
        }
        this.defaultRules[v.prop].push({
          validator: validator.mobile(this),
          trigger: 'blur',
        });
      }

      if (Object.prototype.hasOwnProperty.call(v, 'email')) {
        if (!this.defaultRules[v.prop]) {
          this.$set(this.defaultRules, v.prop, []);
        }
        this.defaultRules[v.prop].push({
          validator: validator.email(this),
          trigger: 'blur',
        });
      }
    });
  },
  methods: {
    validate(fn) {
      return this.$refs.form.validate(fn);
    },
  },
};
</script>

<style>
</style>
