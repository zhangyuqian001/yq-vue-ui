<template>
  <section class="yq-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "yq-container",
  data() {
    return { isVertical: true };
  },
  mounted() {
    this.isVertical = this.$children.some(child =>
      ["yq-footer", "yq-header"].includes(child.$options.name)
    );
  }
};
</script>
<style lang="scss">
.yq-container {
  display: flex;
  flex-direction: row;
  flex:1
}
.yq-container.isVertical {
  flex-direction: column;
}
</style>