<template>
  <div>
    <el-dialog
      ref="dialog"
      :append-to-body="true"
      v-bind="elprops"
      top="0"
      :visible.sync="show"
      :before-close="handleClose"
      width="30%"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">取 消</el-button>
        <el-button type="primary" @click="closeModal">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    // 是否可见
    visible: Boolean,
    // 是否可以拖动
    draggable: Boolean,
    // el-dialog自身的props
    elprops: Object,
  },
  data() {
    return {
      show: this.visible,
      initX: 0,
      initY: 0,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      allowDrag: true,
      instance: null,
    };
  },
  mounted() {
    if (this.draggable) {
      const dom = this.getInstance();

      dom.style.position = 'absolute';
      dom.style.margin = '0';
      dom.style.padding = '0';
      dom.querySelector('.el-dialog__header').style.cursor = 'move';

      document.addEventListener('mousedown', this.handleMousedown);
      document.addEventListener('mousemove', this.handleMousemove);
      document.addEventListener('mouseup', this.handleMouseup);
    }
  },
  watch: {
    visible(val) {
      this.show = val;
      if (val) {
        this.$nextTick(() => {
          // 居中显示
          const dom = this.getInstance();
          this.instance = dom;
          const height = dom.offsetHeight;
          const width = dom.offsetWidth;

          const parentWrapper = dom.closest('.el-dialog__wrapper');
          const parentHeight = parentWrapper.offsetHeight;
          const parentWidth = parentWrapper.offsetWidth;

          this.initX = (parentWidth - width) / 2;
          this.initY = (parentHeight - height) / 2;

          dom.style.top = `${this.initY}px`;
          dom.style.left = `${this.initX}px`;
        });
      }
    },
    show(val) {
      this.$emit('update:visible', val);
    },
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.handleMousedown);
    document.removeEventListener('mousemove', this.handleMousemove);
    document.removeEventListener('mouseup', this.handleMouseup);
  },
  methods: {
    getInstance() {
      return this.$refs.dialog.$el.querySelector('.el-dialog');
    },

    /**
     * 处理实例的位置
     */
    handleInstancePosition(top, left) {
      const dom = this.instance;
      dom.style.top = `${top}px`;
      dom.style.left = `${left}px`;
    },

    handleClose(done) {
      done();
    },

    /**
     * 处理鼠标按下事件
     */
    handleMousedown(e) {
      if (this.allowDrag && e.target.closest('.el-dialog__header')) {
        this.allowDrag = false;
        this.startX = e.pageX;
        this.startY = e.pageY;
      }
    },

    /**
     * 处理鼠标移动
     */
    handleMousemove(e) {
      if (!this.allowDrag) {
        const x = e.pageX;
        const y = e.pageY;
        this.handleInstancePosition(this.initY + y - this.startY, this.initX + x - this.startX);
      }
    },

    /**
     * 处理鼠标弹起事件
     */
    handleMouseup() {
      if (this.instance && !this.allowDrag) {
        this.allowDrag = true;
        this.initX = parseInt(this.instance.style.left, 10);
        this.initY = parseInt(this.instance.style.top, 10);
      }
    },

    closeModal() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style>
</style>
