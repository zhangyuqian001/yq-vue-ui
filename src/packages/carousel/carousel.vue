<template>
  <div
    class="yq-carousel"
    :style="{height}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div class="viewport">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="item in len"
        :key="item"
        :class="{active:item-1 === currentSelected}"
        @click="select(item-1)"
      >{{item-1}}</span>
    </div>
    <div class="arrow-box">
      <yq-button icon="left" @click="select(currentSelected - 1,true)"></yq-button>
      <yq-button icon="right" @click="select(currentSelected + 1,true)"></yq-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "yq-carousel", // 轮播图组件
  props: {
    height: {
      type: String,
      default: "200px"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 3000
    },
    initialIndex: {
      // 默认用户传递的值 这个不会变
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { currentSelected: this.initialIndex, len: 0, reverse: false };
  },
  methods: {
    handleTouchStart(e) {
      this.handleMouseEnter();
      this.startTouch = e.touches[0];
    },
    handleTouchEnd(e) {
      let endTouch = e.changedTouches[0];

      let {clientX:x1,clientY:y1} = this.startTouch;
      let {clientX:x2,clientY:y2} = endTouch;
      let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
      // 是往哪边移动
      let disY = Math.abs(y2-y1);
      let x = Math.sqrt(2)/2 * distance;
      if(disY < x){
         if(x2 > x1){
             this.select(this.currentSelected - 1,true);
         }else{
             this.select(this.currentSelected + 1,true)
         }
      }
      this.run();
    },
    handleMouseEnter() {
      clearInterval(this.timer);
      this.timer = null;
    },
    handleMouseLeave() {
      this.run();
    },
    select(newIndex, flag) {
      // 临界问题
      if (newIndex === this.len) newIndex = 0;
      if (newIndex === -1) newIndex = this.len - 1;
      let index = this.currentSelected;
      // 0  1 正  1  0 反
      this.reverse = index > newIndex ? true : false; 
      if ((this.timer || flag) && this.loop) {
        // 没有无缝就没有临界点的问题
        if (index == 0 && newIndex == this.len - 1) this.reverse = true;
        if (index == this.len - 1 && newIndex === 0) this.reverse = false;
      }
      this.children.forEach(vm => {
        vm.reverse = this.reverse;
      });
      this.$nextTick(() => {
        this.currentSelected = newIndex;
      });
    },
    run() {
      if (this.autoplay) {
        // 如果是自动不放 就开始运行
        this.timer = setInterval(() => {
          let index = this.currentSelected;
          let newIndex = index + 1;
          this.select(newIndex);
        }, this.delay);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  mounted() {
    this.children = this.$children.filter(
      item => item.$options.name == "yq-carousel-item"
    );
    this.len = this.children.length;
    this.run();
  }
};
</script>
<style lang="scss">
.yq-carousel {
  position: relative;
  .viewport {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dots span {
    display: inline-block;
    width: 20px;
    height: 10px;
    background: #ccc;
    margin: 5px;
    text-indent: -9999px;
    opacity: 0.5;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
  }
  .arrow-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>