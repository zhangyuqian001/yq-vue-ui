<template>
  <button class="yq-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)">
    <yq-icon :icon="icon" v-if="icon && !loading" class="icon"></yq-icon>
    <!-- loading 的icon -->
    <yq-icon icon="loading" v-if="loading" class="icon"></yq-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "yq-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            "组件type类型必须为：" +
              ["warning", "success", "danger", "info", "primary"].join("、")
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error(
            "组件iconPosition属性必须为：" + ["left", "right"].join("、")
          );
        }
        return true;
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`yq-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`yq-button-${this.iconPosition}`)
      }
      return classes;
    }
  }
};
</script>
<style lang="scss">
@import "../../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.yq-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-self: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        syccess: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        syccess: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,$color in (
        primary: $primary-active,
        syccess: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon + span {
    //看看icon后面是否有span标签
    margin-left: 4px;
  }

  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
    .icon + span {
      margin-right: 4px;
      margin-left: 0px;
    }
  }
  &[disabled]{
    cursor: not-allowed;
  }
}
</style>