<template>
  <ul class="yq-pagination">
    <li>
      <yq-icon icon="left" @click="select(currentPage-1)"></yq-icon>
    </li>
    <li>
      <span :class="{active:currentPage === 1}" @click="select(1)">1</span>
    </li>
    <li v-if="showPrevMore">
      <span>...</span>
    </li>
    <li v-for="p in pagers" :key="p">
      <span :class="{active:currentPage === p}" @click="select(p)">{{p}}</span>
    </li>
    <li v-if="showNextMore">
      <span>...</span>
    </li>
    <li>
      <span :class="{active:currentPage === total}" @click="select(total)">{{total}}</span>
    </li>
    <li>
      <yq-icon icon="right" @click="select(currentPage+1)"></yq-icon>
    </li>
  </ul>
</template>

<script>
export default {
  name: "yq-pagination",
  data() {
    return { showPrevMore: false, showNextMore: false };
  },
  methods: {
    select(current) {
      if (current < 1) {
        current = 1;
      }
      if (current > this.total) {
        current = this.total;
      }
      if (current !== this.currentPage) {
        this.$emit("update:current-page", current);
      }
    }
  },
  computed: {
    pagers() {
      //  总共的页数
      let total = this.total;
      let pagerCount = this.pagerCount;
      let middleValue = Math.floor(this.pagerCount / 2);
      let currentPage = this.currentPage;
      //  计算是否显示前面的。。。 还是显示后面的。。。
      let showPrevMore = false;
      let showNextMore = false;
      if (total > pagerCount) {
        // 需要显示...
        if (currentPage > middleValue + 1) {
          showPrevMore = true;
        }
        if (currentPage < total - middleValue) {
          showNextMore = true;
        }
      }
      let arr = [];
      if (showPrevMore && !showNextMore) {
        let start = total - (pagerCount - 2);
        for (let i = start; i < total; i++) {
          arr.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          arr.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        let val = Math.floor((pagerCount - 2) / 2);
        for (let i = currentPage - val; i <= currentPage + val; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 2; i < total; i++) {
          arr.push(i);
        }
      }

      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;

      return arr;
    }
  },
  props: {
    total: {
      type: Number,
      default: 1
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped lang="scss">
.yq-pagination li {
  list-style: none;
  display: inline-flex;
  vertical-align: middle;
  user-select: none;
  font-size: 22px;
  span{
      padding: 0px 3px;
  }
  .active {
    color: red;
  }
}
</style>