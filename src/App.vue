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
    <br><br><br>
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
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    loading(e){
      alert(e.toString())
    }
  },
}
</script>

<style lang="scss">
.red{
  background-color: red;
}
.green{
  background-color: green;
}
</style>
