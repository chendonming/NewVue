<template>
  <div>
    <el-dialog
      ref="dialog"
      :append-to-body="true"
      v-bind="$attrs"
      top="0"
      :visible.sync="show"
      :before-close="handleClose"
      width="30%"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">{{$t('cancel')}}</el-button>
        <el-button type="primary" @click="submit">{{$t('submit')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/**
 * Basic popup assembly
 */
export default {
  name: 'cpopup',
  inheritAttrs: false,
  props: {
    // Is visible
    visible: Boolean,
    // Whether it can be dragged
    draggable: Boolean,
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
      // The maximum gap is that
      // there must be a gap of at least maxGap above
      // and below the popup window.
      maxGap: 20,
    };
  },
  mounted() {
    const dom = this.getInstance();

    dom.style.position = 'absolute';
    dom.style.margin = '0';
    dom.style.padding = '0';

    if (this.draggable) {
      dom.querySelector('.el-dialog__header').style.cursor = 'move';
      dom.querySelector('.el-dialog__header').style.userSelect = 'none';

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
          // Center display
          const dom = this.instance || this.getInstance();
          this.instance = dom;
          const height = dom.offsetHeight;
          const width = dom.offsetWidth;

          const parentWrapper = dom.closest('.el-dialog__wrapper');
          const parentHeight = parentWrapper.offsetHeight;
          const parentWidth = parentWrapper.offsetWidth;

          this.initX = (parentWidth - width) / 2;
          this.initY = (parentHeight - height) / 2;

          if (this.initY < this.maxGap) {
            this.initY = this.maxGap;
            const headerHeight = dom.querySelector('.el-dialog__header').offsetHeight;
            const footerHeight = dom.querySelector('.el-dialog__footer').offsetHeight;
            document.querySelector('.el-dialog__body').style.height = `${parentHeight - headerHeight - footerHeight - 2 * this.maxGap - 60}px`;
            document.querySelector('.el-dialog__body').style.overflow = 'auto';
          }

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
    if (this.draggable) {
      document.removeEventListener('mousedown', this.handleMousedown);
      document.removeEventListener('mousemove', this.handleMousemove);
      document.removeEventListener('mouseup', this.handleMouseup);
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    },

    getInstance() {
      return this.$refs.dialog.$el.querySelector('.el-dialog');
    },

    handleInstancePosition(top, left) {
      const dom = this.instance;
      dom.style.top = `${top}px`;
      dom.style.left = `${left}px`;
    },

    handleClose(done) {
      done();
    },

    handleMousedown(e) {
      if (this.allowDrag && e.target.closest('.el-dialog__header')) {
        this.allowDrag = false;
        this.startX = e.pageX;
        this.startY = e.pageY;
      }
    },

    handleMousemove(e) {
      if (!this.allowDrag) {
        const x = e.pageX;
        const y = e.pageY;
        this.handleInstancePosition(
          this.initY + y - this.startY,
          this.initX + x - this.startX,
        );
      }
    },

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
