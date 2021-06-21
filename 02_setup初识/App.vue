<template>
  <div>base</div>
  <!-- <h2>{{ number }}</h2> -->
</template>

<script lang="ts">
// lang="ts" 表示这里可以使用ts代码

// defineComponent函数：目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: "App",

  // 测试代码：setup是组合api中使用的第一个函数
  // setup() {
  //   // console.log("setup");
  //   const number = 10;
  //   return {
  //     number,
  //   };
  // },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
