<template>
  <div id="app">
    <!-- 默认按钮 -->
    <yq-button>默认按钮</yq-button>
    <!-- 带类型的按钮 -->
    <yq-button type="primary">主要按钮</yq-button>
    <yq-button type="warning">警告按钮</yq-button>
    <yq-button type="danger">危险按钮</yq-button>
    <yq-button type="success">成功按钮</yq-button>
    <yq-button type="info">信息按钮</yq-button>

    <!-- 带搜索的按钮 -->
    <yq-button type="danger" icon="sousuo">搜索左</yq-button>
    <yq-button type="info" icon="edit" icon-position="right">搜索右</yq-button>

    <yq-button type="danger" icon="edit"></yq-button>
    <br />
    <br />
    <br />
    <!-- loading 按钮 -->
    <yq-button type="success" loading>加载</yq-button>
    <!-- 触发事件 -->
    <yq-button type="success" @click="loading">提交</yq-button>

    <yq-button-group>
      <yq-button icon="left" icon-position="left">上一页</yq-button>
      <yq-button icon="right" icon-position="right">下一页</yq-button>
    </yq-button-group>
    <yq-icon icon="sousuo"></yq-icon>
    <yq-icon icon="edit"></yq-icon>

    <yq-row>
      <yq-col :span="12">111</yq-col>
      <yq-col :span="12">
        <div class="green">dd</div>
      </yq-col>
    </yq-row>
    <yq-row>
      <yq-col :span="24">
        <div class="red">33w2w2</div>
      </yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="6">
        <div class="red">eded</div>
      </yq-col>
      <yq-col :span="6">
        <div class="green">eded</div>
      </yq-col>
      <yq-col :span="6">
        <div class="red">eded</div>
      </yq-col>
      <yq-col :span="6">
        <div class="green">eded</div>
      </yq-col>
    </yq-row>
    <yq-row justify="space-around">
      <yq-col :span="3">
        <div class="red">fcfc</div>
      </yq-col>
      <yq-col :span="3">
        <div class="green">fdfd</div>
      </yq-col>
    </yq-row>
    <br />
    <yq-input v-model="value" type="text" placeholder="请输入内容" name="username"></yq-input>
    <yq-input v-model="value" type="password" placeholder="请输入内容" name="username"></yq-input>
    <yq-input v-model="value" type="password" :disabled="true" placeholder="请输入内容" name="username"></yq-input>
    <yq-input v-model="value" type="password" placeholder="请输入内容" name="username" clearable></yq-input>
    <yq-input v-model="value" type="password" placeholder="请输入内容" name="username" show-password></yq-input>
    <yq-input
      v-model="value"
      type="password"
      placeholder="请输入内容"
      name="username"
      prefix-icon="edit"
    ></yq-input>
    <yq-input
      v-model="value"
      type="password"
      placeholder="请输入内容"
      name="username"
      suffix-icon="edit"
    ></yq-input>
    {{value}}
    <br />
    <br />
    <yq-table
      :columns="columns1"
      :data="data1"
      @on-select="select"
      @on-select-all="selectAll"
      @on-sort-change="change"
      height="200px"
    >
      <template slot="name" slot-scope="{row,col}">
        <h1>{{row[col.key]}}</h1>
      </template>
      <template slot="action">
        <yq-button>删除</yq-button>
      </template>
    </yq-table>
    <br />

    <yq-pagination :total="10" :pager-count="5" :current-page.sync="currentPage"></yq-pagination>
    <br />
    <yq-popover
      v-model="popoverValue"
      width="200px"
      title="标题"
      content="内容内容，这是一个popover"
      trigger="click"
      placement="right"
    >
      <yq-button type="primary" slot="reference">点我弹框</yq-button>
    </yq-popover>
    <br />
    <yq-progress style="margin-top:30px" :percentage="60"></yq-progress>
    <br />
    {{value1}}
    <br />
    日期选择器
    <yq-date-picker v-model="value1"></yq-date-picker>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      value1: "",
      value: "",
      currentPage: 6,
      columns1: [
        {
          type: "selection",
          width: 60
        },
        {
          title: "Name",
          key: "name",
          slot: "name"
        },
        {
          title: "Age",
          key: "age",
          sortable: "custom", // iview  默认排序 排序方法 custom（远程排序）
          sortType: "asc"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "operator",
          slot: "action",
          key: "operator"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      popoverValue: ""
    };
  },
  methods: {
    loading(e) {
      alert(e.toString());
    },
    change({ col, type }) {
      console.log(col, type);
    },
    select(selection, row) {
      console.log(selection, row);
    },
    selectAll(selection) {
      console.log(selection);
    }
  }
};
</script>

<style lang="scss">
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
