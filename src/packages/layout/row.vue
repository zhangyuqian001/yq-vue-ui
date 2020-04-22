<template>
  <div class="yq-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yq-row",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify:{
        type:String,
        validator(type){
            if (type && !['start','end','center','space-around','space-between'].includes(type)) {
                console.error('类型必须是：'+['start','end','center','space-around','space-between'].join('、'))
            }
            return true
        }
    }
  },
  mounted() {
    this.$children.forEach(child => {
      child.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          marginLeft: -this.gutter/2 + "px",
          marginRight: -this.gutter/2 + "px"
        };
      }
      if (this.justify) {
          let key = ['start','end'].includes(this.justify)?'flex-'+this.justify:this.justify
          style = {
              ...style,
              justifyContent:key
          }
      }
      return style;//通过外层的margin赋值，解决内部padding的问题
    }
  }
};
</script>
<style lang="scss">
.yq-row {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>